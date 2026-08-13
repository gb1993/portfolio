import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim e experiência",
  description:
    "Conheça a trajetória, os resultados e as habilidades de Gabriel Branco, desenvolvedor front-end especializado em e-commerce no Rio de Janeiro.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    url: "/sobre",
    title: "Sobre Gabriel Branco | Desenvolvedor Front-end",
    description:
      "Experiência, resultados e habilidades em desenvolvimento front-end para e-commerce.",
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
