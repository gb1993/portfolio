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
        GABRIEL BRANCO, {" "}
        <span className="text-primary">
          <Typewriter
            words={[
              "DESENVOLVEDOR FRONT-END.",
              "SOLUCIONADOR DE PROBLEMAS.",
            ]}
            loop={false}
            cursor={true}
          />
        </span>
      </h1>
      <p className="text-dark-or-light-secondary mb-8">
        Apaixonado por tecnologia desde que me entendo por gente, estudei as
        mais diversas áreas do ramo. Sou desenvolvedor front-end especializado
        em React, Next.js e TypeScript, com experiência na criação e no
        aprimoramento de lojas virtuais, sites e experiências web.
      </p>
      <ButtonLink text="SAIBA MAIS" target="_self" link="/sobre" />
    </main>
  );
}
