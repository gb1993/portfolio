import Container from "@/components/Container";
import Title from "@/components/Title";
import { socialMediaIconCss } from "@/utils/consts";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ButtonLink from "@/components/ButtonLink";
import TitleSecondary from "@/components/TitleSecondary/intex";
import Divide from "@/components/Divide";
import TecsChart from "@/components/TecsChart";
import Experience from "@/components/Experience";

const Sobre = () => {
  const aboutKeyCss = "text-dark-or-light-secondary/60";
  const aboutValueCss = "text-dark-or-light-secondary mb-4";
  const aboutMetricBoxCss =
    "w-full max-w-[240px] border rounded-sm border-black-secondary pt-5 pr-[30px] pb-[25px] pl-10";
  const aboutMetricBoxYearsCss = `relative text-primary font-bold text-5xl after:content-["+"] after:absolute after:text-primary after:text-3xl after:font-normal`;
  const aboutMetricBoxTextCss =
    "relative pl-10 text-dark-or-light-secondary text-sm before:content-[''] before:absolute before:left-0 before:top-3 before:flex before:bg-dark-or-light-secondary before:w-7 before:h-[1px]";

  return (
    <Container>
      <>
        <Title backTitle="RESUMO" title="SOBRE" highlight="MIM" />
        <section className="flex justify-between gap-13 w-full">
          <div className="w-full flex justify-between flex-col">
            <TitleSecondary text="INFORMAÇÕES PESSOAIS" />
            <div className="flex justify-between">
              <div>
                <p className={aboutValueCss}>
                  <span className="text-dark-or-light-secondary/60">Nome:</span>{" "}
                  Gabriel Branco
                </p>
                <p className={aboutValueCss}>
                  <span className={aboutKeyCss}>Cidade:</span> Rio de janeiro
                </p>
              </div>
              <div>
                <p className={aboutValueCss}>
                  <span className={aboutKeyCss}>Idade:</span> 32 anos
                </p>
                <p className={aboutValueCss}>
                  <span className={aboutKeyCss}>Email:</span>{" "}
                  gbdev1993@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                href={"https://www.linkedin.com/in/gabriel-branco/"}
                target="_blank"
                className={socialMediaIconCss}
              >
                <LinkedInIcon className="text-white" sx={{ width: 18 }} />
              </Link>
              <Link
                href={"https://github.com/gb1993"}
                target="_blank"
                className={socialMediaIconCss}
              >
                <GitHubIcon className="text-white" sx={{ width: 18 }} />
              </Link>
              <Link
                href={"https://chess.com/play/GabrielsBranco"}
                target="_blank"
                className={socialMediaIconCss}
                title="Me desafie no xadrez!"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  style={{ width: 18 }}
                >
                  <path
                    style={{ fill: "#fff" }}
                    d="M22.07,21.034l-1.42-1.42c-1.83-1.83-2.99-4.19-3.36-6.72h2.04v-2.16l-2.15-1.08h-0.01v-0.58c1.3-0.75,2.16-2.14,2.16-3.74 c0-2.39-1.93-4.32-4.32-4.32s-4.32,1.93-4.32,4.32c0,1.6,0.86,2.99,2.16,3.74v0.58l-2.16,1.08v2.16h2.04 c-0.37,2.53-1.53,4.89-3.36,6.72l-1.42,1.42c-1.01,1.01-1.58,2.38-1.58,3.81v2.09c5.5,1.47,11.25,1.48,17.28,0v-2.09 C23.65,23.414,23.08,22.044,22.07,21.034z M14.14,4.134c-0.83,0.83-1.84,1.17-2.25,0.76c-0.42-0.42-0.08-1.43,0.75-2.26 c0.82-0.82,1.83-1.16,2.25-0.74C15.3,2.304,14.96,3.314,14.14,4.134z"
                  />
                </svg>
              </Link>
            </div>
            <ButtonLink
              link="/Currículo-Gabriel-Branco.pdf"
              text="BAIXAR CV"
              download={true}
            />
          </div>
          <div className="w-full flex flex-wrap gap-6 justify-end">
            <div className={aboutMetricBoxCss}>
              <h3 className={aboutMetricBoxYearsCss}>3</h3>
              <p className={aboutMetricBoxTextCss}>ANOS DE EXPERIÊNCIA</p>
            </div>
            <div className={aboutMetricBoxCss}>
              <h3 className={aboutMetricBoxYearsCss}>16</h3>
              <p className={aboutMetricBoxTextCss}>PROJETOS PARTICIPADOS</p>
            </div>
            <div className={aboutMetricBoxCss}>
              <h3 className={aboutMetricBoxYearsCss}>3</h3>
              <p className={aboutMetricBoxTextCss}>AGÊNCIAS IMPACTADAS</p>
            </div>
          </div>
        </section>
        <Divide />
        <section>
          <TitleSecondary text="HARD SKILLS" align="center" />
          <TecsChart />
        </section>
        <Divide />
        <section>
          <TitleSecondary text="EXPERIÊNCIA & ACADÊMICO" align="center" />
          <Experience />
        </section>
      </>
    </Container>
  );
};

export default Sobre;
