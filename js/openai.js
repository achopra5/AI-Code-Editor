class OpenAIService {
    constructor() {
        this.apiUrl = 'http://localhost:3001/api/chat';
    }

    async generateResponse(userMessage, codeContext) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: userMessage,
                    codeContext: codeContext
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.statusText}`);
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Error calling API:', error);
            throw error;
        }
    }
}

export const openAIService = new OpenAIService(); 