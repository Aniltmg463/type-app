"use client"; // if you're in Next.js App Router

import { createContext, useState, useContext, ReactNode } from "react";

// 1️⃣ Create context
const ThemeContext = createContext<any>(null);

// 2️⃣ Provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ Custom hook
export function useTheme() {
  return useContext(ThemeContext);
}
