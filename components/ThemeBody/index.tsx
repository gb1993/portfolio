"use client";

import { usePathname } from 'next/navigation'
import { useColor } from "../../context/ColorContext";
import FloatBar from "../FloatBar";

interface ThemeBodyProps {
  children: React.ReactNode;
  font: string;
}

export default function ThemeBody({ children, font }: ThemeBodyProps) {
  const { color, mode } = useColor();
  const pathname = usePathname()

  return (
    <body
      className={`${font} w-full min-h-dvh bg-dark-or-light-primary theme-${color} mode-${mode}`}
    >
      <FloatBar currentPath={pathname} />
      {children}
    </body>
  );
}
