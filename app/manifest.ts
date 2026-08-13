import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GBDEV — Portfólio Gabriel Branco",
    short_name: "GBDEV",
    description: "GBDEV é o portfólio profissional de Gabriel Branco, desenvolvedor front-end.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#febb32",
    lang: "pt-BR",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
