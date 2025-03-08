import { Poppins } from "next/font/google";
import { ColorProvider } from "../context/ColorContext";
import ThemeBody from "@/components/ThemeBody";
import "./globals.css";

export const metadata = {
  title: "Portfólio",
  description: "Um lugar para contar sobre minha trajetória profissional.",
};

const poppins = Poppins({
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ColorProvider>
      <html lang="pt-br">
        <ThemeBody font={poppins.className}>{children}</ThemeBody>
      </html>
    </ColorProvider>
  );
}
