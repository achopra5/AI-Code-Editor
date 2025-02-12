# Judge0 IDE with Integrated Chat Assistant

## Overview

The Judge0 IDE is a web-based integrated development environment that allows users to write, compile, and run code in various programming languages. This version includes an integrated Chat Assistant powered by OpenAI, providing real-time assistance and code suggestions.

## Features

- **Multi-language Support**: Write and execute code in multiple programming languages.
- **Integrated Chat Assistant**: Get real-time help and code suggestions from the AI assistant.
- **User-friendly Interface**: A clean and intuitive interface for coding.
- **Live Code Execution**: Compile and run code directly in the browser.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Configuration](#api-configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/judge0-ide.git
   cd judge0-ide
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory and add your OpenAI API key:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key_here
     ```

## Usage

### Running the Application

1. **Start a Local Development Server**:
   - You can use one of the following methods to run the application:

   **Option 1: Use `npx serve`**:
   ```bash
   npx serve
   ```

   **Option 2: Use Python’s Simple HTTP Server**:
   - For Python 3:
     ```bash
     python -m http.server 3000
     ```
   - For Python 2:
     ```bash
     python -m SimpleHTTPServer 3000
     ```

   **Option 3: Use Live Server**:
   ```bash
   npm install -g live-server
   live-server --port=3000
   ```

2. **Open the IDE in Your Browser**:
   - Navigate to `http://localhost:3000` to access the Judge0 IDE.

## API Configuration

- Ensure that your OpenAI API key is correctly set in the `.env` file.
- The application will use this key to communicate with the OpenAI API for the Chat Assistant functionality.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Judge0](https://judge0.com/) for the coding environment.
- [OpenAI](https://openai.com/) for the AI assistant.

