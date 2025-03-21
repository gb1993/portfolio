"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface ColorContextType {
  color: string;
  setColor: (color: string) => void;
  mode: string;
  toggleMode: () => void;
}

const ColorContext = createContext<ColorContextType>({
  color: "yellow",
  setColor: () => {},
  mode: "dark",
  toggleMode: () => {},
});

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const hasColor = localStorage?.getItem("color") || "yellow";
  const hasMode = localStorage?.getItem("mode") || "dark";
  const [color, setColor] = useState<string>(hasColor);
  const [mode, setMode] = useState<string>(hasMode);

  useEffect(() => {
    localStorage?.setItem("color", color);
  }, [color]);

  useEffect(() => {
    localStorage?.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ColorContext value={{ color, setColor, mode, toggleMode }}>
      {children}
    </ColorContext>
  );
};
