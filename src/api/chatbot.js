// Chatbot API service
const API_KEY = "AIzaSyBjL_Lsy920qyyVOUip-1UC7UMlHM4O_hY";

class ChatbotService {
  constructor() {
    this.apiKey = API_KEY;
    this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    this.systemPrompt = `You are an intelligent, friendly, and helpful virtual assistant for Manvian Institute, trained to answer questions from students, parents, and prospective applicants. Your job is to provide accurate and updated information about:

- Admission process and eligibility
- Courses and departments offered
- Fee structure and scholarships
- Hostel and campus facilities
- Events, placements, and internship opportunities
- Contact information and how to reach the college
- Any other general queries related to Manvian Institute

If the user asks something unrelated or beyond your knowledge base, politely guide them to contact the official college helpdesk or website.

Keep responses concise, polite, and informative. Maintain a warm and welcoming tone throughout.

If needed, ask follow-up questions to better understand the user's query.`;
  }

  async sendMessage(message) {
    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${this.systemPrompt}\n\nUser: ${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
    }
  }
}

export default new ChatbotService();