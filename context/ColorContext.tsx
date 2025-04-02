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
  return useContext(ColorContext);
};

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<string>("yellow");
  const [mode, setMode] = useState<string>("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedColor = localStorage.getItem("color");
      const storedMode = localStorage.getItem("mode");
      if (storedColor) setColor(storedColor);
      if (storedMode) setMode(storedMode);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("color", color);
    }
  }, [color]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mode", mode);
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ColorContext.Provider value={{ color, setColor, mode, toggleMode }}>
      {children}
    </ColorContext.Provider>
  );
};
