/* CSS CONSTS */
export const floatBarItemCss = `
  cursor-pointer relative flex items-center justify-center w-13 h-13 rounded-full text-white
  hover:bg-primary
`;
export const floatBarItemTitleCss = `
  bg-primary pointer-events-none pr-0 w-fit overflow-hidden rounded-full w-13 flex items-center justify-center gap-2 font-bold opacity-0 h-full absolute right-0 !transition-all !duration-300
  group-hover:opacity-100 group-hover:pl-8 group-hover:pr-14 group-hover:pointer-events-auto
`;
export const iconContentCss =
  "bg-black-secondary flex items-center justify-center w-full h-full z-[2] rounded-full group-hover:bg-primary duration-400";
export const contactInputCss =
  "text-sm w-full py-3 px-6.5 border-2 border-transparent rounded-full bg-black-secondary/30 outline-none focus:border-primary text-dark-or-light-secondary placeholder:text-dark-or-light-secondary";
export const contactTextAreaCss =
  "text-sm w-full rounded-3xl py-3 px-6.5 border-2 border-transparent bg-black-secondary/30 outline-none focus:border-primary text-dark-or-light-secondary placeholder:text-dark-or-light-secondary";
export const socialMediaIconCss =
  "flex items-center justify-center bg-black-secondary hover:bg-primary w-10 h-10 rounded-full";
export const xpIconContainerCss =
  "flex justify-center relative before:content-[''] before:absolute before:top-0.5 before:bottom-0 before:bg-black-secondary before:w-[1px]";
export const xpTagCss =
  "text-dark-or-light-secondary bg-dark-or-light-secondary/20 w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold mb-3";
export const aboutKeyCss = "text-dark-or-light-secondary/60";
export const aboutValueCss = "text-dark-or-light-secondary mb-4";
export const aboutMetricBoxCss =
  "w-full max-w-full lg:max-w-[240px] border rounded-sm border-black-secondary p-6 text-center lg:text-start lg:pt-5 lg:pr-[30px] lg:pb-[25px] lg:pl-10";
export const aboutMetricBoxYearsCss = `relative text-primary font-bold text-5xl after:content-["+"] after:absolute after:text-primary after:text-3xl after:font-normal`;
export const aboutMetricBoxTextCss =
  "relative lg:pl-10 text-dark-or-light-secondary text-sm before:content-[''] before:absolute before:left-0 before:top-3 before:flex before:bg-dark-or-light-secondary before:w-7 before:h-[1px]";
/* ARRAY CONST */
export const themes = [
  { color: "#febb32", value: "yellow" },
  { color: "#4169e1", value: "blue" },
  { color: "#ff8a51", value: "orange" },
  { color: "#ee6192", value: "pink" },
  { color: "#6957af", value: "purple" },
  { color: "#72b626", value: "green" },
  { color: "#f72b1c", value: "red" },
];
export const techGroups = [
  {
    title: "Front-end",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Preact",
      "Vue",
      "Sass",
      "Tailwind CSS",
      "Storybook",
    ],
  },
  {
    title: "E-commerce",
    technologies: ["VTEX", "Shopify", "Deco", "Uappi"],
  },
  {
    title: "Integrações & arquitetura",
    technologies: [
      "REST APIs",
      "GraphQL",
      "Node.js",
      "React Query",
      "Design systems",
    ],
  },
  {
    title: "Ferramentas & processos",
    technologies: ["Git", "GitKraken", "Jira", "Monday"],
  },
];
export const xp = [
  {
    timeOn: "04/2024 - Atual",
    title: "Desenvolvedor Front-end Pleno",
    place: "We.digi",
    description:
      "Reduzi o tempo de desenvolvimento de novos e-commerces com melhorias no boilerplate. Também apliquei minha experiência em diferentes CMSs para diversificar a carteira de clientes e contribuir para o aumento do faturamento da agência.",
    technologies: [
      "React",
      "TypeScript",
      "Preact",
      "Vue",
      "VTEX",
      "Shopify",
      "Deco",
      "Uappi",
      "REST",
      "GraphQL",
      "Node.js",
    ],
  },
  {
    timeOn: "11/2022 - 04/2024",
    title: "Desenvolvedor Front-end Júnior",
    place: "ED3 Digital",
    description:
      "Desenvolvi novos projetos de e-commerce, atuei como responsável técnico em contrato terceirizado por outra agência e implementei melhorias de performance orientadas pelas métricas do Lighthouse.",
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "React Query",
      "Sass",
      "Tailwind CSS",
      "VTEX",
    ],
  },
  {
    timeOn: "08/2016 - 11/2021",
    title: "Analista de Sistemas Pleno",
    place: "Dermage",
    description:
      "Desenvolvi um sistema EAN-13 em PHP e MySQL para substituir uma solução legada. Também unifiquei e automatizei o sistema de receitas, eliminando multas recorrentes causadas pela ausência de relatórios para a VISA.",
    technologies: ["PHP", "MySQL", "Datasul (TOTVS)", "GCOM", "GLPI"],
  },
];
export const academic = [
  {
    timeOn: "01/2014 - 06/2017",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "UniCarioca",
    description:
      "Ensino superior interrompido. Formação que estabeleceu a base da minha trajetória profissional em tecnologia.",
  },
];
export const delays = [0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1.08];
