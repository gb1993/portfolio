"use client";

import { Typewriter } from "react-simple-typewriter";
import getGreetings from "../utils/getGreeting";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  const greet = getGreetings();

  return (
    <main className="w-full h-dvh flex flex-col justify-center max-w-[800px] m-auto px-4 animate-opacity-page">
      <h3
        className="text-lg text-dark-or-light-secondary"
        title="Baseado no horário de brasília"
      >
        {greet}
      </h3>
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
      <p className="text-dark-or-light-secondary mb-8">
        Apaixonado por tecnologia desde que me entendo por gente, estudei as
        mais diversas áreas do ramo. Nos últimos três anos, me especializei em
        desenvolvimento web e atuei como frontend, voltado para o aprimoramento
        e a concepção de projetos inovadores.
      </p>
      <ButtonLink text="SAIBA MAIS" target="_self" link="/sobre" />
    </main>
  );
}
