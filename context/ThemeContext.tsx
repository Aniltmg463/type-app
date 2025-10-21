// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext({});

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// export default function ThemeProvider({ children }: any) {
//   const [isDark, setIsDark] = useState(true);

//   function toggleTheme() {
//     setIsDark((prev) => !prev);
//   }

//   useEffect(() => {
//     setIsDark(localStorage.getItem("isDark") === "true");
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("isDark", isDark);
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDark]);

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }


"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// 1. Define the type for context
type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

// 2. Create context with proper type
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Hook to use context safely
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}

// 4. Provider
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  // Load from localStorage once on mount
  useEffect(() => {
    const storedValue = localStorage.getItem("isDark");
    if (storedValue !== null) {
      setIsDark(storedValue === "true");
    }
  }, []);

  // Save to localStorage & apply class when theme changes
  useEffect(() => {
    localStorage.setItem("isDark", String(isDark)); // ✅ convert boolean → string
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
