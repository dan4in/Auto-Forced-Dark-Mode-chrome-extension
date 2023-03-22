chrome.storage.sync.get("darkMode", ({ darkMode }) => {
  const toggleDarkMode = () => {
    darkMode = !darkMode;
    chrome.storage.sync.set({ darkMode });
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { message: "toggleDarkMode", darkMode },
        () => {
          console.log(`Dark mode is now ${darkMode ? "enabled" : "disabled"}`);
        }
      );
    });
  };

  if (darkMode) {
    document.body.classList.add("dark-mode");
  }

  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { message: "getDarkMode" },
      (response) => {
        if (response && response.darkMode) {
          document.body.classList.add("dark-mode");
        }
      }
    );
  });

  console.log(`Dark mode is currently ${darkMode ? "enabled" : "disabled"}`);

});