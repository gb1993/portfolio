import { ImageResponse } from "next/og";

export const alt = "Gabriel Branco — Desenvolvedor Front-end";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#111111",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#febb32", fontSize: 30, fontWeight: 700 }}>
        PORTFÓLIO
      </div>
      <div style={{ fontSize: 76, fontWeight: 800, marginTop: 20 }}>
        Gabriel Branco
      </div>
      <div style={{ fontSize: 38, color: "#d4d4d4", marginTop: 16 }}>
        Desenvolvedor Front-end
      </div>
      <div style={{ display: "flex", gap: 18, marginTop: 54, fontSize: 25 }}>
        <span>React</span><span>•</span><span>Next.js</span><span>•</span><span>TypeScript</span>
      </div>
    </div>,
    size,
  );
}
