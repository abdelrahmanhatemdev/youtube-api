export async function getTheme() {
    let themeObject = localStorage.getItem("theme");
    if (themeObject) {
          return themeObject;
    }   
    localStorage.setItem("theme", "dark");
    return "dark";
}

export async function updateTheme(theme) {  
  localStorage.setItem("theme", theme);
  return theme;
}
