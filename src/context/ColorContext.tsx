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
  // Inicializa o estado com o valor salvo ou usa o valor padrão
  const [color, setColor] = useState<string>(() => {
    return sessionStorage.getItem("color") || "yellow";
  });
  const [mode, setMode] = useState<string>(() => {
    return sessionStorage.getItem("mode") || "dark";
  });

  // Sempre que a cor mudar, atualiza o sessionStorage
  useEffect(() => {
    sessionStorage.setItem("color", color);
  }, [color]);

  // Sempre que o modo mudar, atualiza o sessionStorage
  useEffect(() => {
    sessionStorage.setItem("mode", mode);
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
