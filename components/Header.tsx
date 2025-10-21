"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { useTheme } from "../context/ThemeContext";
// import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`hover:underline ${pathname === "/" ? "font-bold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:underline ${
                pathname === "/about" ? "font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`hover:underline ${
                pathname === "/services" ? "font-bold" : ""
              }`}
            >
              Services
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-secondary"
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}