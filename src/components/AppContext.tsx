"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AppContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  language: "AM" | "EN";
  setLanguage: (lang: "AM" | "EN") => void;
}

const AppContext = createContext<AppContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  language: "AM",
  setLanguage: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"AM" | "EN">("AM");


  useEffect(() => {
    const storedDark = localStorage.getItem("darkMode");
    const storedLang = localStorage.getItem("lang");

    if (storedDark === null) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    } else {
      setIsDarkMode(storedDark === "true");
    }

    if (storedLang === "EN" || storedLang === "AM") {
      setLanguage(storedLang);
    }
  }, []);

  
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

 
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
