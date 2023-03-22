chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ darkMode: false });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: setDarkMode,
      args: [{ darkMode: false }]
    });
  }
});

function setDarkMode(args) {
  chrome.storage.sync.get("darkMode", data => {
    if (data.darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });
}