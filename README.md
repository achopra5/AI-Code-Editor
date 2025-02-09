# AI Code Editor

An AI-powered code editor built on the **Judge0 IDE** repository, designed to enhance the coding experience with intelligent features such as inline chat assistance, AI-powered bug detection, autocomplete suggestions, and real-time code fixes.

## 🚀 Features

### 🔹 AI Chat Interface
- Allows users to interact with an AI assistant within the editor.
- Provides explanations, code suggestions, and debugging tips.

### 🔹 Inline Code Assistance
- Users can select a segment of code and initiate an AI-powered chat specific to that code block.
- Offers quick fixes and optimizations.

### 🔹 Autocomplete Suggestions
- AI-based autocomplete while users type to boost productivity.
- Supports multiple programming languages.

### 🔹 Intelligent Bug Finder
- Detects logical and syntax errors in the code.
- Suggests fixes with AI-driven explanations.

### 🔹 Compilation & Execution
- Uses **Judge0** to compile and execute code in multiple languages.
- Ensures minimal latency for real-time feedback.

### 🔹 Smart Recommendations
- Adapts suggestions based on user coding patterns and previous interactions.
- Enhances learning and debugging workflow.

## 🛠 Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **AI Integration**: OpenAI API (or alternative LLMs like DeepSeek R-1)
- **Code Execution**: Judge0 API
- **Database**: PostgreSQL (optional for user history & preferences)
- **Containerization**: Docker


```

## 🛠 Installation & Setup

### Prerequisites
- Node.js & npm
- Docker (optional for Judge0 setup)

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/ai-code-editor.git
   cd ai-code-editor
   ```

2. **Install Dependencies**
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```

3. **Run the Development Server**
   ```sh
   npm run dev
   ```

4. **Run Backend API**
   ```sh
   npm start
   ```

5. **(Optional) Setup Judge0 Locally**
   ```sh
   docker-compose up -d
   ```

## 🧩 Future Enhancements
- **Integration with GitHub Copilot-style suggestions**
- **More advanced debugging explanations**
- **Support for real-time collaboration**
- **Enhanced LLM fine-tuning for better accuracy**

## 🤝 Contributing
Contributions are welcome! Feel free to open issues and pull requests to improve this project.

## 📜 License
MIT License - See [LICENSE](LICENSE) for details.

## 🔗 Resources
- [Judge0](https://judge0.com/)
- [Judge0 IDE GitHub](https://github.com/judge0/ide)
- [DeepSeek R-1 API](https://openrouter.ai/deepseek/deepseek-r1:free)
- [Cursor Prompt Design](https://www.cursor.com/blog/prompt-design)
- [Pear AI GitHub](https://github.com/trypear/pearai-app)

---
**Built with ❤️ for developers who want an AI-powered coding experience!**
