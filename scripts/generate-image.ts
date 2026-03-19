import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: 'A collection of precision CNC machined metal parts, including an impeller, a manifold, brackets, and cylindrical components, arranged neatly on a clean white reflective surface, studio lighting, high quality, photorealistic, similar to industrial manufacturing catalogs.',
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "2K"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        fs.writeFileSync(path.join(publicDir, 'cnc-parts-hero.jpg'), buffer);
        console.log('Image saved to public/cnc-parts-hero.jpg');
        break;
      }
    }
  } catch (e) {
    console.error(e);
  }
}
generate();
