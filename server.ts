import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper to get initialized GoogleGenAI instance safely
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// Business Context
const SYSTEM_INSTRUCTION = `
You are 'AppleBot', the official AI Assistant for Red Apple Mobile Repair in Halasuru, Bengaluru.
Store Details:
- Address: Metro Pillar 125, Off MG Road Police Station, 37 Metro Road, Opp. Bhadra Landmark, Halasuru, Bengaluru
- Phone: +91 866-066-3776
- Operating Hours: Open Daily 9 AM - 9 PM
- Rating: 4.9 Stars (480+ Google Reviews)
- Key Specialties: Level 4 Motherboard Micro-soldering, TBK Laser Back Glass Removal, Curved OLED Screen Lamination, Zero-Password Privacy Mode, 90-Day Lab Warranty.

Guide users on repair feasibility, pricing estimates, zero-password privacy mode, store directions, and appointment bookings.
`;

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Chat API Route
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, history, highThinking } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message prompt is required." });
    }

    const ai = getGenAI();

    // Prepare contents including history if available
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      history.forEach((item: { role: string; text: string }) => {
        contents.push({
          role: item.role === 'model' ? 'model' : 'user',
          parts: [{ text: item.text }]
        });
      });
    }
    contents.push({ role: 'user', parts: [{ text: message }] });

    const modelName = highThinking ? "gemini-3.1-pro-preview" : "gemini-3.6-flash";
    const config: any = {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    };

    if (highThinking) {
      config.thinkingConfig = { thinkingLevel: ThinkingLevel.HIGH };
    }

    const response = await ai.models.generateContent({
      model: modelName,
      contents,
      config,
    });

    res.json({ reply: response.text || "Thank you for contacting Red Apple Mobile Repair. How else can I assist you today?" });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    res.status(500).json({ 
      error: "Failed to generate AI response.", 
      details: error.message || "An unexpected error occurred." 
    });
  }
});

// AI Diagnostic & Cost Estimator Endpoint
app.post("/api/gemini/diagnose", async (req, res) => {
  try {
    const { brand, modelName, issueDescription, symptoms, highThinking } = req.body;
    if (!brand || !modelName || !issueDescription) {
      return res.status(400).json({ error: "Device brand, model name, and issue description are required." });
    }

    const ai = getGenAI();

    const prompt = `Perform a comprehensive technical diagnostic for a device repair request at Red Apple Mobile Repair Halasuru:
Device Brand: ${brand}
Device Model: ${modelName}
Primary Fault: ${issueDescription}
Specific Symptoms: ${symptoms || 'None specified'}

Analyze the likelihood of root causes (e.g. damaged display digitizer, shorted power IC, broken glass layer only, worn battery, liquid corrosion) and provide an estimated cost range in Indian Rupees (INR ₹), expected repair turnaround time, technical complexity level, recommended solution, and zero-password privacy advice.`;

    const selectedModel = highThinking ? "gemini-3.1-pro-preview" : "gemini-3.6-flash";
    const config: any = {
      systemInstruction: "You are the Senior Technical Diagnostic Engineer at Red Apple Mobile Repair Halasuru Bengaluru. Provide accurate, realistic repair cost ranges (INR ₹) and technical insight.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          possibleDiagnosis: {
            type: Type.STRING,
            description: "Technical diagnostic breakdown of likely hardware root cause."
          },
          repairLevel: {
            type: Type.STRING,
            description: "Complexity level, e.g., 'Level 1: Glass Replacement', 'Level 2: Module Swap', 'Level 4: Motherboard Micro-soldering'."
          },
          estimatedCostMinINR: {
            type: Type.NUMBER,
            description: "Minimum estimated repair cost in Indian Rupees (₹)."
          },
          estimatedCostMaxINR: {
            type: Type.NUMBER,
            description: "Maximum estimated repair cost in Indian Rupees (₹)."
          },
          estimatedTimeMinutes: {
            type: Type.STRING,
            description: "Estimated turnaround time, e.g., '30-45 minutes' or '2-4 hours'."
          },
          recommendedAction: {
            type: Type.STRING,
            description: "Step-by-step recommendation for the customer."
          },
          privacyAdvice: {
            type: Type.STRING,
            description: "Data security guidance emphasizing Zero-Password / Maintenance Mode."
          },
          keyPartsNeeded: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of replacement parts or laser/OCA equipment required."
          }
        },
        required: [
          "possibleDiagnosis",
          "repairLevel",
          "estimatedCostMinINR",
          "estimatedCostMaxINR",
          "estimatedTimeMinutes",
          "recommendedAction",
          "privacyAdvice",
          "keyPartsNeeded"
        ]
      }
    };

    if (highThinking) {
      config.thinkingConfig = { thinkingLevel: ThinkingLevel.HIGH };
    }

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: prompt,
      config
    });

    const diagnosticData = JSON.parse(response.text || '{}');
    res.json({ diagnostic: diagnosticData });
  } catch (error: any) {
    console.error("Gemini Diagnostic API Error:", error);
    res.status(500).json({ 
      error: "Failed to generate diagnostic estimate.", 
      details: error.message || "An unexpected error occurred." 
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
