import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

async function download() {
  const url = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200';
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const file = fs.createWriteStream(path.join(publicDir, 'cnc-parts-hero.jpg'));
  
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      console.log('Image downloaded to public/cnc-parts-hero.jpg');
    });
  }).on('error', function(err) {
    fs.unlink(path.join(publicDir, 'cnc-parts-hero.jpg'), () => {});
    console.error('Error downloading image:', err.message);
  });
}
download();
