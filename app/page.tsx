"use client";
import { Typewriter } from "react-simple-typewriter";
import FloatBar from "../components/FloatBar";
// import { useColor } from "../context/ColorContext";
import getGreetings from "../utils/getGreeting";

export default function Home() {
  const greet = getGreetings();
  // const { color, mode } = useColor();

  return (
    <div className={`flex justify-center items-center`}>
      <FloatBar />
      <main className="px-4">
        <h3 className="text-lg text-dark-or-light-secondary">{greet}</h3>
        <h1 className="text-4xl text-dark-or-light-secondary font-bold mt-4 mb-2">
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
        <div className="max-w-[750px]">
          <p className="text-dark-or-light-secondary">
            Apaixonado por tecnologia desde que me entendo por gente, estudei as
            mais diversas áreas do ramo. Nos últimos três anos, especializei-me
            em desenvolvimento web e atuei como frontend, voltado para o
            aprimoramento e a concepção de e-commerces.
          </p>
          <a
            href="/sobre"
            className="hover:bg-primary font-bold w-fit flex mt-8 items-center justify-center text-dark-or-light-secondary border-2 border-primary px-12 py-2 rounded-full"
          >
            SAIBA MAIS
          </a>
        </div>
      </main>
    </div>
  );
}
