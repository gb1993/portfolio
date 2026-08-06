import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim e experiência",
  description:
    "Conheça a trajetória, experiência profissional, formação e habilidades técnicas de Gabriel Branco, desenvolvedor front-end no Rio de Janeiro.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    url: "/sobre",
    title: "Sobre Gabriel Branco | Desenvolvedor Front-end",
    description:
      "Experiência profissional, formação e habilidades em desenvolvimento front-end.",
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
