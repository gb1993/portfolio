import React from "react";
import { useColor } from "./context/ColorContext";
import { Typewriter } from "react-simple-typewriter";
import FloatBar from "./components/FloatBar";
import greetings from "./utils/getTime";

const App: React.FC = () => {
  const greet = greetings();
  const { color, mode } = useColor();

  return (
    <div
      className={`w-full min-h-screen bg-dark-or-light-primary theme-${color} mode-${mode}`}
    >
      <FloatBar />
      <main>
        <h3 className="text-2xl text-dark-or-light-secondary">{greet}</h3>
        <h1 className="text-5xl text-dark-or-light-secondary font-bold">
          EU SOU{" "}
          <span className="text-primary">
            <Typewriter
              words={[
                "GABRIEL BRANCO.",
                "DESENVOLVEDOR FRONTEND.",
                "SOLUCIONADOR DE PROBLEMAS.",
              ]}
              loop={false}
              cursor={true}
            />
          </span>
        </h1>
      </main>
    </div>
  );
};

export default App;
