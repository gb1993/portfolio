"use client";

import { Typewriter } from "react-simple-typewriter";
import getGreetings from "../utils/getGreeting";
import ButtonLink from "@/components/ButtonLink";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { useEffect, useState } from "react";

export default function Home() {
  const greet = getGreetings();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  return (
    <main className="w-full h-dvh flex flex-col justify-center max-w-[800px] m-auto px-4 animate-opacity-page">
      <p
        className="text-lg text-dark-or-light-secondary"
        title="Baseado no horário de brasília"
      >
        <span className="font-semibold text-primary">GBDEV</span> · {greet}
      </p>
      <h1 className="block h-20 text-4xl text-dark-or-light-secondary font-bold mt-4 mb-2">
        GABRIEL BRANCO, {" "}
        <span className="text-primary">
          {hasMounted ? (
            <Typewriter
              words={[
                "DESENVOLVEDOR FRONT-END.",
                "ESPECIALISTA EM E-COMMERCE.",
              ]}
              loop={false}
              cursor={true}
            />
          ) : (
            "DESENVOLVEDOR FRONT-END."
          )}
        </span>
      </h1>
      <p className="text-dark-or-light-secondary mb-8">
        Há quase 10 anos atuo com tecnologia e, nos últimos 3, me especializei
        em desenvolvimento front-end para e-commerce. Crio e evoluo lojas
        virtuais rápidas e escaláveis, conectando experiência do usuário,
        performance e resultados de negócio em plataformas como VTEX, Shopify,
        Deco e Uappi.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <ButtonLink
          text="VER PROJETOS"
          target="_self"
          link="/trabalhos"
          icon={<WorkOutlineRoundedIcon fontSize="small" />}
        />
        <ButtonLink
          text="SOBRE MIM"
          target="_self"
          link="/sobre"
          icon={<PersonOutlineRoundedIcon fontSize="small" />}
        />
      </div>
    </main>
  );
}
