import { Poppins } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { ColorProvider } from "../context/ColorContext";
import ThemeBody from "@/components/ThemeBody";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://www.gbdev.pro";
const siteName = "GBDEV";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GBDEV | Gabriel Branco — Desenvolvedor Front-end",
    template: "%s | GBDEV",
  },
  description:
    "GBDEV é o portfólio de Gabriel Branco, desenvolvedor front-end no Rio de Janeiro especializado em e-commerce, React, TypeScript, VTEX e Shopify.",
  applicationName: "GBDEV — Portfólio Gabriel Branco",
  authors: [{ name: "Gabriel Branco", url: siteUrl }],
  creator: "Gabriel Branco",
  publisher: "Gabriel Branco",
  category: "technology",
  keywords: [
    "GBDEV",
    "gbdev.pro",
    "GBDEV Gabriel Branco",
    "Gabriel Branco",
    "desenvolvedor front-end",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "desenvolvedor TypeScript",
    "desenvolvedor web Rio de Janeiro",
    "portfólio front-end",
  ],
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: "GBDEV | Gabriel Branco — Desenvolvedor Front-end",
    description:
      "GBDEV reúne os projetos, a experiência e a trajetória de Gabriel Branco em desenvolvimento front-end para e-commerce.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GBDEV | Gabriel Branco — Desenvolvedor Front-end",
    description:
      "Projetos, experiência e trajetória em front-end, e-commerce, React e TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Gabriel Branco",
        url: siteUrl,
        jobTitle: "Desenvolvedor Front-end",
        email: "mailto:gabriel@gbdev.pro",
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
        knowsAbout: [
          "React",
          "TypeScript",
          "JavaScript",
          "Front-end",
          "E-commerce",
          "VTEX",
          "Shopify",
          "Deco",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        alternateName: ["Portfólio Gabriel Branco", "gbdev.pro"],
        description:
          "Portfólio profissional de Gabriel Branco, desenvolvedor front-end especializado em e-commerce.",
        inLanguage: "pt-BR",
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <ColorProvider>
      <html lang="pt-BR">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
            }}
          />
        </head>
        <ThemeBody font={poppins.className}>{children}</ThemeBody>
        <Analytics />
      </html>
    </ColorProvider>
  );
}
