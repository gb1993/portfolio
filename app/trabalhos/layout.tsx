import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio de projetos web",
  description:
    "Conheça projetos de desenvolvimento front-end publicados por Gabriel Branco para marcas como Coca-Cola, Swarovski, Dermage, Espaço Smart e outras.",
  alternates: { canonical: "/trabalhos" },
  openGraph: {
    url: "/trabalhos",
    title: "Projetos web de Gabriel Branco",
    description:
      "Uma seleção de lojas virtuais, sites e experiências digitais desenvolvidas para grandes marcas.",
  },
};

export default function TrabalhosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
