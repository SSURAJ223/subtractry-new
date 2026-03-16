import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let resendClient: Resend | null = null;

function getResend() {
  if (!resendClient && process.env.RESEND_API_KEY) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // API routes FIRST
  app.post('/api/quote', async (req, res) => {
    try {
      const { name, email, phone, requirements } = req.body;

      if (!name || !email || !phone || !requirements) {
        return res.status(400).json({ error: 'Name, email, phone, and requirements are required.' });
      }

      const notifyEmail = process.env.NOTIFY_EMAIL || 'founder@subtractry.com';
      const resend = getResend();

      if (!resend || !notifyEmail) {
        console.warn('RESEND_API_KEY or NOTIFY_EMAIL not set. Mocking email send.');
        console.log('--- Mock Email ---');
        console.log(`To: ${notifyEmail || 'user@example.com'}`);
        console.log(`Subject: New Quote Request from ${name}`);
        console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRequirements: ${requirements || 'N/A'}`);
        console.log('------------------');
        return res.json({ success: true, message: 'Quote request received (mocked).' });
      }

      const { data, error } = await resend.emails.send({
        from: 'Subtractry Quotes <onboarding@resend.dev>',
        to: [notifyEmail],
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Requirements:</strong><br/>${requirements || 'N/A'}</p>
        `,
      });


      if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Failed to send email.' });
      }

      res.json({ success: true, data });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
