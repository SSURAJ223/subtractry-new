import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Key, Image as ImageIcon, Loader2, AlertCircle } from 'lucide-react';

const DB_NAME = 'SubtractryImagesDB';
const STORE_NAME = 'images';

const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const saveImage = async (key: string, data: string) => {
  const db = await initDB();
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(data, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

const getImage = async (key: string): Promise<string | null> => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).get(key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
};

export const IMAGE_PROMPTS = {
  heroBg: { prompt: "A dramatic, high-tech abstract background of aerospace manufacturing, glowing orange and dark grey tones, cinematic lighting", ratio: "16:9" },
  semiconductor: { prompt: "Close up of semiconductor wafer manufacturing, clean room, glowing silicon, precision robotics, high tech", ratio: "16:9" },
  aviation: { prompt: "Commercial aviation manufacturing, lightweight structural components, aircraft interior brackets, high precision, bright factory setting", ratio: "16:9" },
  defense: { prompt: "Defense systems manufacturing, rugged military hardware, secure production facility, dark metallic tones, high tech", ratio: "16:9" },
  space: { prompt: "Space exploration components, satellite parts, high-performance alloys, orbital infrastructure manufacturing, clean room", ratio: "16:9" },
  cad: { prompt: "CAD engineering and prototyping, complex 3D model of an aerospace part on a computer screen, glowing blue and orange lines, high tech", ratio: "16:9" },
  engineMachining: { prompt: "Aircraft engine component machining, 5-axis CNC milling, metal shavings, coolant, sparks, industrial precision", ratio: "1:1" },
  turbineBlades: { prompt: "Close up of aircraft engine turbine blades, perfect metallic finish, aerospace engineering, dramatic lighting", ratio: "1:1" },
  engineAssembly: { prompt: "Turbine engine assembly process, engineers working on a massive jet engine, clean room, high precision", ratio: "1:1" },
  cncMilling: { prompt: "Precision CNC milling machine cutting aerospace grade aluminum, close up, macro photography, industrial manufacturing", ratio: "1:1" }
};

export type GeneratedImages = Record<keyof typeof IMAGE_PROMPTS, string>;

const getApiKey = () => {
  try {
    // @ts-ignore
    return process.env.API_KEY || process.env.GEMINI_API_KEY;
  } catch (e) {
    // @ts-ignore
    return import.meta.env?.VITE_API_KEY || import.meta.env?.VITE_GEMINI_API_KEY;
  }
};

export function useGeneratedImages() {
  const [images, setImages] = useState<Partial<GeneratedImages>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [needsKey, setNeedsKey] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    const loadCached = async () => {
      try {
        const cached: Partial<GeneratedImages> = {};
        let allCached = true;
        for (const key of Object.keys(IMAGE_PROMPTS)) {
          const data = await getImage(key);
          if (data) {
            cached[key as keyof GeneratedImages] = data;
          } else {
            allCached = false;
          }
        }
        if (mounted) {
          setImages(cached);
          if (allCached) {
            setIsReady(true);
          } else {
            checkKeyAndGenerate(cached);
          }
        }
      } catch (err) {
        console.error("Failed to load images from DB", err);
        if (mounted) checkKeyAndGenerate({});
      }
    };
    loadCached();
    return () => { mounted = false; };
  }, []);

  const checkKeyAndGenerate = async (cached: Partial<GeneratedImages>) => {
    // @ts-ignore
    if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
      setNeedsKey(true);
      return;
    }
    generateMissing(cached);
  };

  const handleProvideKey = async () => {
    // @ts-ignore
    if (window.aistudio) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      setNeedsKey(false);
      generateMissing(images);
    }
  };

  const generateMissing = async (currentImages: Partial<GeneratedImages>) => {
    setIsGenerating(true);
    setError(null);
    setProgress(0);
    
    const missingKeys = Object.keys(IMAGE_PROMPTS).filter(k => !currentImages[k as keyof GeneratedImages]);
    let completed = 0;
    
    try {
      for (const key of missingKeys) {
        const config = IMAGE_PROMPTS[key as keyof typeof IMAGE_PROMPTS];
        
        const apiKey = getApiKey();
        const ai = new GoogleGenAI({ apiKey: apiKey as string });
        
        const response = await ai.models.generateImages({
          model: 'imagen-4.0-generate-001',
          prompt: config.prompt,
          config: {
            numberOfImages: 1,
            outputMimeType: 'image/jpeg',
            aspectRatio: config.ratio,
          },
        });
        
        const base64 = response.generatedImages[0].image.imageBytes;
        const dataUrl = `data:image/jpeg;base64,${base64}`;
        
        await saveImage(key, dataUrl);
        setImages(prev => ({ ...prev, [key]: dataUrl }));
        
        completed++;
        setProgress(Math.round((completed / missingKeys.length) * 100));
      }
      setIsReady(true);
    } catch (err: any) {
      console.error("Generation error:", err);
      setError(err.message || "Failed to generate images");
      if (err.message?.includes("API key not valid") || err.message?.includes("Requested entity was not found") || err.message?.includes("PERMISSION_DENIED")) {
        setNeedsKey(true);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return { images, isGenerating, progress, needsKey, handleProvideKey, error, isReady, total: Object.keys(IMAGE_PROMPTS).length };
}

export function ImageGeneratorOverlay({ 
  needsKey, 
  isGenerating, 
  progress, 
  error, 
  handleProvideKey,
  total
}: { 
  needsKey: boolean; 
  isGenerating: boolean; 
  progress: number; 
  error: string | null; 
  handleProvideKey: () => void;
  total: number;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-zinc-900/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-zinc-700 text-center">
        <div className="w-16 h-16 bg-orange-500/20 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ImageIcon size={32} />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          Generating Assets
        </h2>
        
        <p className="text-zinc-400 mb-8">
          We need to generate high-quality manufacturing images using the Imagen model.
        </p>

        {needsKey ? (
          <div className="space-y-4">
            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl text-left">
              <div className="flex items-start gap-3">
                <Key className="text-orange-500 mt-0.5 shrink-0" size={20} />
                <div>
                  <h3 className="text-orange-500 font-medium mb-1">API Key Required</h3>
                  <p className="text-sm text-orange-500/80">
                    To generate these images, please provide your Gemini API key. You will only need to do this once.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleProvideKey}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Key size={18} />
              Provide API Key
            </button>
          </div>
        ) : isGenerating ? (
          <div className="space-y-6">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-orange-500">
                    {progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-zinc-700">
                <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500 transition-all duration-500"></div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-zinc-400">
              <Loader2 className="animate-spin" size={20} />
              <span>Generating {total} images... this may take a minute.</span>
            </div>
          </div>
        ) : error ? (
          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-left">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-500 mt-0.5 shrink-0" size={20} />
                <div>
                  <h3 className="text-red-500 font-medium mb-1">Generation Failed</h3>
                  <p className="text-sm text-red-500/80">
                    {error}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleProvideKey}
              className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
