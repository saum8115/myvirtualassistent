// /src/gemini.js

import { GoogleGenAI } from '@google/genai';

const apiKey = "AIzaSyD97wahEUyhqwPvb5CN0MHKOL3DhStJnKY";

async function run(prompt) {
  const ai = new GoogleGenAI({ apiKey });

  const config = {
    thinkingConfig: { thinkingBudget: -1 },
    tools: [{ googleSearch: {} }],
    responseMimeType: 'text/plain',
  };

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `${prompt}. Answer in 1 short sentences only.`, // ✅ enforce concise output
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model: 'gemini-2.5-flash',
    config,
    contents,
  });

  let result = "";

  for await (const chunk of response) {
    result += chunk.text;
  }

  return result;
}

export default run;
