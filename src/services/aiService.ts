const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function generateAIQuestions(materiTitle: string) {
  const prompt = `
    Buatlah 5 soal pilihan ganda Tajwid tentang: "${materiTitle}".
    Berikan HANYA JSON array dengan format:
    [
      {
        "bab": "${materiTitle}",
        "ayat": "teks arab",
        "soal": "pertanyaan",
        "pilihan": ["A", "B", "C", "D"],
        "jawaban": 0,
        "penjelasan": "karena..."
      }
    ]
  `;

  try {
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        response_format: { type: "json_object" }
      })
    });

    const data = await response.json();
    const content = data.choices[0].message.content;
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : (parsed.questions || []);
  } catch (error) {
    console.error('AI Error:', error);
    return [];
  }
}
