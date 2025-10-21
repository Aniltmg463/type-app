
'use client'

import { useContext } from "react";
// import { useTheme } from "@/context/ThemeContext";
import { useTheme } from "../context/ThemeContext";
import { useContextData } from "../component/Context/RootContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const data= useContextData()

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"} style={{ minHeight: "100vh" }}>
      <h1>Hello Next.js with Context API 🚀</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme} style={{ padding: "8px 16px", marginTop: "10px" }}>
        Toggle Theme
      </button>
      <br></br>
      Context api email: {data.email}
    </div>
  );
}
