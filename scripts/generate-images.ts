import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const prompts = [
  { name: "hero-bg", prompt: "A high-precision mechanical engineering component, aerospace grade titanium, studio lighting, macro photography, dark background, cinematic lighting" },
  { name: "commercial-aviation", prompt: "Commercial aviation aircraft engine part, lightweight structural component, close up, high detail, manufacturing facility background, bright and clean" },
  { name: "defense-systems", prompt: "Defense system component, rugged military grade machinery part, advanced technology, dark dramatic lighting, metallic textures" },
  { name: "space-exploration", prompt: "Space exploration satellite component, gold foil, clean room environment, high tech aerospace manufacturing, futuristic" },
  { name: "complex-cnc", prompt: "Complex CNC machined aerospace part, 5-axis milling, shiny metal, cutting fluid, industrial manufacturing, precision engineering" },
  { name: "engine-machining", prompt: "Aircraft engine component undergoing precision machining, sparks, lathe, industrial manufacturing process, dynamic action shot" },
  { name: "turbine-blades", prompt: "Critical aircraft engine components, turbine blades and combustion chamber, high precision engineering, metallic finish, aerospace factory" },
  { name: "cad-drawing", prompt: "Detailed CAD engineering drawing of an aerospace turbine engine on a computer screen, blueprint style, technical, glowing lines" },
  { name: "semiconductor", prompt: "Semiconductor manufacturing process, silicon wafer, clean room, high precision microscopic technology, glowing lights, macro lens" }
];

async function generateImages() {
  const outputDir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const item of prompts) {
    console.log(`Generating image for: ${item.name}`);
    try {
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: item.prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '16:9',
        },
      });

      if (response.generatedImages && response.generatedImages.length > 0) {
        const base64EncodeString = response.generatedImages[0].image.imageBytes;
        const buffer = Buffer.from(base64EncodeString, 'base64');
        fs.writeFileSync(path.join(outputDir, `${item.name}.jpg`), buffer);
        console.log(`Saved ${item.name}.jpg`);
      } else {
        console.error(`No image generated for ${item.name}`);
      }
    } catch (error) {
      console.error(`Failed to generate ${item.name}:`, error);
    }
  }
}

generateImages();
