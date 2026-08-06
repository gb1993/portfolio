import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Gabriel Branco para conversar sobre desenvolvimento front-end, projetos web e oportunidades profissionais.",
  alternates: { canonical: "/contato" },
  openGraph: {
    url: "/contato",
    title: "Contato | Gabriel Branco",
    description:
      "Vamos conversar sobre projetos web e oportunidades em desenvolvimento front-end.",
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
