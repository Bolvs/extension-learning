// document.addEventListener('DOMContentLoaded', function() {
//     const codeInput = document.getElementById('codeInput');
//     const analyzeButton = document.getElementById('analyzeButton');
//     const resultDiv = document.getElementById('resultDiv');

//     analyzeButton.addEventListener('click', async function() {
//         const code = codeInput.value.trim();

//         if (code) {
//             try {
//                 const response = await new Promise((resolve, reject) => {
//                     chrome.runtime.sendMessage({ action: 'calculateComplexity', code: code }, (response) => {
//                         if (chrome.runtime.lastError) {
//                             reject(chrome.runtime.lastError);
//                         } else {
//                             resolve(response);
//                         }
//                     });
//                 });

//                 resultDiv.textContent = `Time Complexity: ${response.complexity}`;
//             } catch (error) {
//                 resultDiv.textContent = 'Error calculating complexity';
//                 console.error('Error:', error);
//             }
//         } else {
//             resultDiv.textContent = 'Please enter the code.';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('analyzeButton').addEventListener('click', function () {
        const code = document.getElementById('codeInput').value;

        chrome.runtime.sendMessage({ action: 'calculateComplexity', code: code }, function (response) {
            document.getElementById('result').textContent = response.complexity;
        });
    });
});
