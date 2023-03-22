chrome.storage.sync.get("darkMode", data => {
  if (data.darkMode) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

chrome.storage.onChanged.addListener(changes => {
  if (changes.darkMode) {
    const newDarkModeValue = changes.darkMode.newValue;
    document.documentElement.setAttribute(
      "data-theme",
      newDarkModeValue ? "dark" : "light"
    );
  }
});