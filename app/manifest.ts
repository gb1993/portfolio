import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfólio Gabriel Branco",
    short_name: "Gabriel Branco",
    description: "Portfólio profissional de Gabriel Branco, desenvolvedor front-end.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#febb32",
    lang: "pt-BR",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
