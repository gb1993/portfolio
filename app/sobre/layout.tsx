import type { Metadata } from "next";

const siteUrl = "https://www.gbdev.pro";
const pageUrl = `${siteUrl}/sobre`;

export const metadata: Metadata = {
  title: "Gabriel Branco — Desenvolvedor Front-end",
  description:
    "Perfil profissional de Gabriel Branco, desenvolvedor front-end no Rio de Janeiro especializado em e-commerce, React, TypeScript, VTEX e Shopify.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    url: "/sobre",
    title: "Gabriel Branco — Desenvolvedor Front-end | GBDEV",
    description:
      "Conheça a experiência, os resultados e as habilidades de Gabriel Branco em desenvolvimento front-end para e-commerce.",
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}/#profilepage`,
    url: pageUrl,
    name: "Gabriel Branco — Desenvolvedor Front-end",
    description:
      "Perfil profissional de Gabriel Branco, desenvolvedor front-end especializado em e-commerce.",
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Gabriel Branco",
      url: siteUrl,
      jobTitle: "Desenvolvedor Front-end",
      description:
        "Desenvolvedor front-end especializado em e-commerce, React, TypeScript, VTEX e Shopify.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rio de Janeiro",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.linkedin.com/in/gabriel-branco/",
        "https://github.com/gb1993",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
