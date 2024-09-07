// Function to copy code from LeetCode's code block
function copyLeetCodeCode() {
    // Select the code block element. You might need to adjust the selector based on the current page structure
    const codeBlock = document.querySelector('.inputarea, .CodeMirror-code'); // Adjust selector if needed
    if (codeBlock) {
        const codeText = codeBlock.innerText;
        // Copy to clipboard (optional)
        navigator.clipboard.writeText(codeText).then(function() {
            console.log('Code copied to clipboard:', codeText);
        }, function(err) {
            console.error('Failed to copy code: ', err);
        });

        // Send the code text to the background script
        chrome.runtime.sendMessage({ action: 'storeCode', code: codeText });
    } else {
        console.log('Code block not found');
    }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'copyCode') {
        copyLeetCodeCode();
    }
});
