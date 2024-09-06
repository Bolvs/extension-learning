try {
    chrome.tabs.onCreated.addListener(function(tab) {
        console.log("Hello, World!");
    });
} catch (error) {
    console.error("Error:", error);
}
