import { openAIService } from './openai.js';

class ChatAssistant {
    constructor() {
        console.log('ChatAssistant initialized');
        this.initialize();
    }

    initialize() {
        console.log('Checking for chat elements...');
        const checkElements = setInterval(() => {
            // Wait for layout to be initialized
            if (!window.ideLayout) {
                console.log('Waiting for layout initialization...');
                return;
            }

            const input = document.querySelector('#chat-input');
            const sendButton = document.querySelector('#chat-send');
            const messagesContainer = document.querySelector('#chat-messages');
            
            if (input && sendButton && messagesContainer) {
                console.log('Chat elements found, setting up event listeners');
                clearInterval(checkElements);
                this.setupEventListeners(input, sendButton, messagesContainer);
                this.addMessage(messagesContainer, 'AI', 'Hello! I\'m your AI programming assistant. How can I help you today?', 'ai');
            } else {
                console.log('Still waiting for elements...', {
                    input: !!input,
                    sendButton: !!sendButton,
                    messagesContainer: !!messagesContainer
                });
            }
        }, 100);
    }

    setupEventListeners(input, sendButton, messagesContainer) {
        console.log('Setting up event listeners');
        
        // Click event
        sendButton.addEventListener('click', () => {
            console.log('Send button clicked');
            this.handleSendMessage(input, messagesContainer);
        });
        
        // Enter key event
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                console.log('Enter key pressed');
                this.handleSendMessage(input, messagesContainer);
            }
        });

        this.loadingIndicator = document.createElement('div');
        this.loadingIndicator.className = 'message ai loading';
        this.loadingIndicator.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    }

    async handleSendMessage(input, messagesContainer) {
        console.log('Handling send message');
        const message = input.value.trim();
        if (!message) {
            console.log('Message is empty, ignoring');
            return;
        }

        console.log('Sending message:', message);

        // Add user message
        this.addMessage(messagesContainer, 'User', message, 'user');
        input.value = '';

        // Show loading indicator
        messagesContainer.appendChild(this.loadingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            // Get current editor content
            const editorContent = window.editor ? window.editor.getValue() : '';
            console.log('Current editor content:', editorContent);
            
            // Get AI response
            console.log('Calling OpenAI service...');
            const response = await openAIService.generateResponse(message, editorContent);
            console.log('Received AI response:', response);
            
            // Remove loading indicator
            this.loadingIndicator.remove();
            
            // Add AI response
            this.addMessage(messagesContainer, 'AI', response, 'ai');
        } catch (error) {
            console.error('Error in handleSendMessage:', error);
            
            // Remove loading indicator
            this.loadingIndicator.remove();
            
            // Show error message
            this.addMessage(
                messagesContainer,
                'AI',
                'Sorry, I encountered an error. Please try again or check your API configuration.',
                'ai error'
            );
        }
    }

    addMessage(container, sender, message, className) {
        console.log('Adding message:', { sender, message, className });
        const messageElement = document.createElement('div');
        messageElement.className = `message ${className}`;
        
        // Format code blocks in the message
        const formattedMessage = message.replace(/```([\s\S]*?)```/g, 
            (match, code) => `<pre><code>${code}</code></pre>`);
        
        messageElement.innerHTML = `
            <div class="message-header">
                <strong>${sender}</strong>
                <span class="timestamp">${new Date().toLocaleTimeString()}</span>
            </div>
            <div class="message-content">${formattedMessage}</div>
        `;
        
        container.appendChild(messageElement);
        container.scrollTop = container.scrollHeight;
    }
}

// Initialize the ChatAssistant after the document is fully loaded
window.addEventListener('load', () => {
    console.log('Window loaded, initializing ChatAssistant');
    new ChatAssistant();
});

// Add a global error handler
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});
