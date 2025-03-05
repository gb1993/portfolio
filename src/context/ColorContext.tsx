import React, { createContext, useState, useContext, ReactNode } from "react";

interface ColorContextType {
  color: string;
  setColor: (color: string) => void;
  mode: string;
  toggleMode: () => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor deve ser usado dentro de um ColorProvider");
  }
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<string>("yellow");
  const [mode, setMode] = useState<string>("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ColorContext.Provider value={{ color, setColor, mode, toggleMode }}>
      {children}
    </ColorContext.Provider>
  );
};
