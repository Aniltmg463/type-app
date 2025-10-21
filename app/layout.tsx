import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";
// import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js app with theme switching and services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}