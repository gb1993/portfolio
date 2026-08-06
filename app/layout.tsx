import { Poppins } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { ColorProvider } from "../context/ColorContext";
import ThemeBody from "@/components/ThemeBody";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://www.gbdev.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gabriel Branco | Desenvolvedor Front-end",
    template: "%s | Gabriel Branco",
  },
  description:
    "Portfólio de Gabriel Branco, desenvolvedor front-end no Rio de Janeiro especializado em React, Next.js, TypeScript e experiências web.",
  applicationName: "Portfólio Gabriel Branco",
  authors: [{ name: "Gabriel Branco", url: siteUrl }],
  creator: "Gabriel Branco",
  publisher: "Gabriel Branco",
  category: "technology",
  keywords: [
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
    siteName: "Portfólio Gabriel Branco",
    title: "Gabriel Branco | Desenvolvedor Front-end",
    description:
      "Projetos, experiência e trajetória de Gabriel Branco em desenvolvimento front-end.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Branco | Desenvolvedor Front-end",
    description:
      "Projetos, experiência e trajetória em React, Next.js e TypeScript.",
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
        knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Front-end"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Portfólio Gabriel Branco",
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
