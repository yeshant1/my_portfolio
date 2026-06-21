import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const THEMES = {
  neon: {
    name: "neon",
    bg: "linear-gradient(135deg, #060112 0%, #11052c 50%, #060112 100%)",
    primary: "#00f5ff",
    secondary: "#8338ec",
    accent: "#00e676",
    text: "#ffffff",
    textMuted: "rgba(255,255,255,0.7)",
    cardBg: "rgba(17, 8, 38, 0.55)",
    borderColor: "rgba(0, 245, 255, 0.15)",
  },
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("neon");

  const theme = THEMES[currentTheme];

  const switchTheme = (themeName) => {
    if (THEMES[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    theme,
    currentTheme,
    switchTheme,
    allThemes: Object.keys(THEMES),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
