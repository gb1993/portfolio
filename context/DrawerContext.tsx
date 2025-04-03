import React, { createContext, useContext, useState, ReactNode } from "react";

interface DrawerContextProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DrawerProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<DrawerContextProps | undefined>(undefined);

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ active, setActive }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useDrawerContext = (): DrawerContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext deve ser usado dentro de um DrawerProvider"
    );
  }
  return context;
};
