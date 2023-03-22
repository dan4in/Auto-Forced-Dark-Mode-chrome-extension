This code sets up the content script for the extension. The `isPageBright` function determines whether the page is bright or not by calculating the brightness of the body background color and text color. The `getBrightness` function calculates the brightness of a color in the RGB format. The `chrome.storage.sync.get` method retrieves the `isDarkModeEnabled` setting from the storage and checks if it's enabled and the page is not already in dark mode. If so, it executes the `toggleDarkMode` function.


