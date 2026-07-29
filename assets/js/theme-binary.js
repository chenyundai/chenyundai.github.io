// Keep the site theme as an explicit light/dark choice.
(() => {
  const applyThemeSetting = setThemeSetting;
  const normalizeThemeSetting = (themeSetting) => {
    if (themeSetting === "light" || themeSetting === "dark") return themeSetting;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  setThemeSetting = (themeSetting) => applyThemeSetting(normalizeThemeSetting(themeSetting));
  toggleThemeSetting = () => {
    setThemeSetting(determineThemeSetting() === "dark" ? "light" : "dark");
  };

  setThemeSetting(determineThemeSetting());
  document.getElementById("light-toggle-system")?.remove();
})();
