"use client";

import { useColor } from "../../context/ColorContext";

interface ThemeBodyProps {
  children: React.ReactNode;
  font: string;
}

export default function ThemeBody({ children, font }: ThemeBodyProps) {
  const { color, mode } = useColor();

  return (
    <body
      className={`${font} w-full min-h-dvh bg-dark-or-light-primary theme-${color} mode-${mode}`}
    >
      {children}
    </body>
  );
}
