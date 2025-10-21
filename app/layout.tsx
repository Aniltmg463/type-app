
import { RootContext } from "./component/Context/RootContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
      {/* <RootContext> */}
      <body>
        {children}
      </body>
      {/* </RootContext> */}
      </ThemeProvider>
    </html>
  );
}
