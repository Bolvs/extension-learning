// // // background.js
//  //import { GoogleGenerativeAI } from "./node_modules/@google/generative-ai";
// // importScripts('https://cdn.jsdelivr.net/npm/@google/generative-ai@latest/dist/index.js');

// chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
//     if (request.action === 'calculateComplexity') {
//         // const code = request.code;

//         // const endpoint = 'https://api.generativeai.google.com/v1/models/gemini-1.5-flash:generateContent';
//         // const apiKey = '';  // Replace with your actual API key
//         // const prompt = `Analyze the time complexity of the following code:\n\n${code}`;

//         // const body = JSON.stringify({
//         //     prompt: prompt,
//         //     model: "gemini-1.5-flash"
//         // });

//         try {
           

//             // Fetch your API_KEY
//             const API_KEY = "";
//             // Make sure to include these imports:
//       // import { GoogleGenerativeAI } from "@google/generative-ai";
//       const genAI = new GoogleGenerativeAI(API_KEY);
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
//       const prompt = "Write a story about a magic backpack.";
      
//       const result = await model.generateContent(prompt);
//       console.log(result.response.text());
//         } catch (error) {
//             console.error('Error making the request:', error.message);
//             sendResponse({ complexity: 'Error making the request' });
//         }

//         return true; // Indicates response will be sent asynchronously
//     }
// });
// // import { GoogleGenerativeAI } from 'https://cdn.jsdelivr.net/npm/@google/generative-ai@latest/dist/index.js';

// // const apiKey = ''; // Replace with your API key
// // const genAI = new GoogleGenerativeAI(apiKey);

// // async function analyzeComplexity(code) {

// //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// //     try {
// //         console.log(apiKey)
// //         const prompt = `Analyze the time complexity of the following code:\n\n${code}`;
// //         const result = await model.generateContent({ prompt });
// //         console.log(result.response.text());
// //     } catch (error) {
// //         console.error('Error making the request:', error.message);
// //     }
// // }
// Import the GoogleGenerativeAI package
import { GoogleGenerativeAI } from '@google/generative-ai';

// Listener for messages sent from popup or content scripts
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.action === 'calculateComplexity') {
        try {
            const apiKey = '';  // Replace with your actual API key
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `Analyze the time complexity of the following code:\n\n${request.code}`;
            const result = await model.generateContent({ prompt });

            sendResponse({ complexity: result.response.text() });
        } catch (error) {
            console.error('Error making the request:', error.message);
            sendResponse({ complexity: 'Error making the request' });
        }

        return true;  // Indicates response will be sent asynchronously
    }
});
