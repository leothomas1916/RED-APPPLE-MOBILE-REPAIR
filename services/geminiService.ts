export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AIDiagnosticRequest {
  brand: string;
  modelName: string;
  issueDescription: string;
  symptoms?: string;
  highThinking?: boolean;
}

export interface AIDiagnosticResult {
  possibleDiagnosis: string;
  repairLevel: string;
  estimatedCostMinINR: number;
  estimatedCostMaxINR: number;
  estimatedTimeMinutes: string;
  recommendedAction: string;
  privacyAdvice: string;
  keyPartsNeeded: string[];
}

export const sendMessageToGemini = async (
  message: string, 
  history: ChatMessage[] = [],
  highThinking: boolean = false
): Promise<string> => {
  try {
    const res = await fetch("/api/gemini/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history, highThinking }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.details || errData.error || "Server response error");
    }

    const data = await res.json();
    return data.reply || "Thank you for asking. Our team at Metro Pillar 125 Halasuru is happy to help!";
  } catch (error: any) {
    console.error("Client Gemini Chat Error:", error);
    return "I'm having a brief connection issue. Please feel free to call our Halasuru shop directly at +91 866-066-3776 for instant assistance!";
  }
};

export const getAIDiagnosticEstimate = async (
  request: AIDiagnosticRequest
): Promise<AIDiagnosticResult> => {
  const res = await fetch("/api/gemini/diagnose", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.details || errData.error || "Failed to generate diagnostic estimate.");
  }

  const data = await res.json();
  return data.diagnostic;
};
