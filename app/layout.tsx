import ThemeProvider from "../context/ThemeContext";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
