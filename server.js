import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Debug middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok',
        apiKeyConfigured: !!process.env.OPENAI_API_KEY
    });
});

// OpenAI proxy endpoint
app.post('/api/chat', async (req, res) => {
    try {
        // Validate API key
        if (!process.env.OPENAI_API_KEY) {
            console.error('OpenAI API key is not configured');
            return res.status(500).json({ 
                error: 'OpenAI API key is not configured',
                details: 'Please check server environment variables'
            });
        }

        const { message, codeContext } = req.body;
        
        // Validate request body
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        console.log('Processing request:', { 
            messageLength: message.length,
            codeContextLength: codeContext?.length || 0
        });

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4-turbo-preview',
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful programming assistant. Provide clear, concise explanations and code examples when appropriate."
                    },
                    {
                        role: "user",
                        content: `Current code context:\n\`\`\`\n${codeContext || ''}\n\`\`\`\n\nUser question: ${message}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 2000
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('OpenAI API error:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData
            });
            throw new Error(`OpenAI API error: ${response.statusText}`);
        }

        const data = await response.json();
        res.json({ response: data.choices[0].message.content });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ 
            error: 'Failed to get AI response',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log('Environment check:');
    console.log('- OpenAI API Key configured:', !!process.env.OPENAI_API_KEY);
    console.log('- NODE_ENV:', process.env.NODE_ENV || 'not set');
});
