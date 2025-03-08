import { Poppins } from "next/font/google";
import { ColorProvider, } from "../context/ColorContext";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <ColorProvider>
        <body
          className={`${poppins.className} w-full min-h-screen bg-dark-or-light-primary theme-${color} mode-${mode}`}
        >
          {children}
        </body>
      </ColorProvider>
    </html>
  );
}
