# JantrikGPT
# AI Chatbot with Voice, Text, File, and Image Support

This project is an AI chatbot developed to provide prompt responses to user commands using voice input and text inputs. It also supports file and image commands and generates generative images. The chatbot utilizes Optical Character Recognition (OCR) to extract text from images and responds based on the recognized commands. The system is designed to be modular, allowing for easy integration of additional features such as generating travel blogs with images. 

## Technologies Used
- Frontend: Next.js
- Backend: Node.js
- Database: MongoDB
- Object Storage: Cloudinary

## APIs Utilized
- Voice to Text: AssemblyAI
- Text to Voice: Azure Cognitive Service
- ChatGPT: OpenAI
- Optical Character Recognition: Azure Vision Studio
- Text to Image Generation: Stable Diffusion AI

## Features
- Voice and text-based interaction: Users can communicate with the chatbot using either voice or text commands.
- File and image commands: The chatbot accepts file and image inputs, allowing users to interact with the system using various media types.
- Optical Character Recognition: The system employs OCR to extract text from images and responds accordingly.
- Generative image generation: The chatbot utilizes Stable Diffusion AI to generate unique and creative images based on user commands.
- PDF generation: Users can request and download PDFs, including children's book PDFs, created by the system.
- Modular design: The system is designed with modularity in mind, enabling easy integration of additional features and functionalities.

## Additional Components
- PDF Storage: The system utilizes Cloudinary for storing and retrieving PDFs, providing a reliable storage solution instead of relying on a CDN.
- Platform for sharing system-generated PDFs: A platform is available for users to share and view PDFs generated by the system, enhancing accessibility and sharing capabilities.

## Installation and Setup
1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Configure the environment variables for the APIs and services used.
4. Run the application using `npm start`.

## Contributions
Contributions to this project are welcome. If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- [AssemblyAI](https://assemblyai.com/) for voice-to-text conversion.
- [Azure Cognitive Service](https://azure.microsoft.com/services/cognitive-services/) for text-to-voice conversion.
- [OpenAI](https://openai.com/) for the ChatGPT model.
- [Azure Vision Studio](https://azure.microsoft.com/services/cognitive-services/computer-vision/) for Optical Character Recognition.
- [Stable Diffusion AI](https://stablediffusionapi.com/) for text-to-image generation.

Please refer to the documentation and official websites of the respective APIs and services for detailed usage instructions and terms of service.

Enjoy interacting with our AI chatbot and exploring its various features!
