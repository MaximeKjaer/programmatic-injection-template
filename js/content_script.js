let enabled = true;
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch (message) {
        case 'disable':
            enabled = false;
            document.body.classList.add('extension-disabled');
            document.body.classList.remove('extension-enabled');
            // Hide any inserted HTML elements here
            break;
        case 'enable':
            enabled = true;
            document.body.classList.add('extension-enabled');
            document.body.classList.remove('extension-disabled');
            // Show any previously hidden elements here
            break;
    }
});

/* Write your content script here */
