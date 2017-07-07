# Programmatic injection setup for Google Chrome extensions
This repository contains the setup for [programmatic injection](https://developer.chrome.com/extensions/content_scripts#pi) of JS and CSS into a given page when you click on the browser action icon. It makes it easier to start coding your Chrome extension by eliminating a lot of the front setup.

- Displays whether the extension is active on the current tab
- Supports JS and CSS injection
- You can disable and enable the content script by clicking on the browser action icon

![Example of extension being enabled and disabled](https://i.imgur.com/ZcRujH4.png)

This setup is useful if you want to be able to toggle your content script on and off; if you just need to run your code every time you click on the browser action icon, you should look into this [bare minimum setup](https://gist.github.com/danharper/8364399).

## Quick Start

### Step 1: Fork or clone this repository
Fork this repo, and rename the repository to whatever you're developing.

### Step 2: Customize the manifest file
Enter the name of your extension, a description and many other options by editing the `manifest.json` file.

### Step 3: Replace the icons
This repository provides a very generic icon, that you may want to replace. It comes in two version; a dark one for when the extension is active, and a greyed out version for when it's inactive.

The darker one must be provided in the following sizes:
- 16x16px
- 24x24px
- 32x32px
- 48x48px
- 128x128px

The greyed out one can be provided just using the following sizes:
- 16x16px
- 24x24px
- 32x32px

If you're changing file names, make sure you're changing the name of the icons in the `manifest.json` file as well. Make sure you're reloading the extension from `chrome://extensions` after any change to `manifest.json`.

### Step 4: Write JS and CSS!
You can now write your content scripts! Simply edit `js/content_script.js`.

- If you need to inject more than one script, you can add it to the `jsInjects` or `cssInjects` arrays in `background.js`. Make sure you add them in the correct order if you have any dependencies.
- If you are applying styles to elements on the page, you can chose only to enable them when the body has the `extension-enabled` class, or to override them when the body has the `extension-disabled` class.
- You can use the `enabled` variable in `content_script.js` to know whether or not to do certain things
- If there's anything you need to hide, reset or undo when the content script is disabled, you can do it at the commented lines in `content_script.js`

## Local development
You can install the unpackaged extension from the source code by opening a new tab and typing `chrome://extensions`. You'll need to activate the developer mode, click on "Load unpacked extension..." and select the source folder.

If you modify `manifest.json` while the unpacked extension is installed, you'll have to reload it from `chrome://extensions`.

Please note that installing extensions this way is suitable for development purposes only; since Chrome 34 (2014), a warning popup will be displayed at every startup of the browser (to the [annoyance of every developer in the world](https://bugs.chromium.org/p/chromium/issues/detail?id=337734#c4)). The only way ([almost](https://stackoverflow.com/questions/23055651/disable-developer-mode-extensions-pop-up-in-chrome/38011386#38011386)) not to get the popup is to publish and install the extension through the Chrome Webstore.
