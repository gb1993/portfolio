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
export const dataChart = [
  { tech: "HTML", senior: 10 },
  { tech: "CSS", senior: 10 },
  { tech: "React JS", pleno: 8 },
  { tech: "VTEX", pleno: 8 },
  { tech: "Redux", pleno: 8 },
  { tech: "TypeScript", pleno: 8 },
  { tech: "Jest", junior: 3 },
  { tech: "Node", junior: 3 },
  { tech: "JavaScript", senior: 10 },
];
export const xp = [
  {
    timeOn: "2024 - Atual",
    title: "Desenvolvedor Frontend Pl.",
    place: "We.Digi",
    description:
      "Desenvolver e-commerces usando REACT, Typescript, DECO, VTEX, SASS, Tailwind, DENO, NODE, Melhoria de SEO e otimização de performance",
  },
  {
    timeOn: "2022 - 2024",
    title: "Desenvolvedor Frontend Jr.",
    place: "ED3 Digital",
    description:
      "Desenvolver e-commerces usando REACT, Typescript, VTEX, SASS e Tailwind",
  },
  {
    timeOn: "2016 - 2021",
    title: "Analista de sistemas Pl.",
    place: "Dermage",
    description:
      "Implantação, suporte e treinamento em sistemas, desenvolvimento de pequenos sistemas com PHP.",
  },
];
export const academic = [
  {
    timeOn: "2022",
    title: "HAKATHON",
    place: "SANTANDER",
    description:
      "Uma expêriencia única de criar soluções em tempo recorde(2 dias) onde meu time desenvolveu uma alternativa de crédito para gamers em marketplaces. O mais legal é que ficamos em quarto lugar!",
  },
  {
    timeOn: "2022 - 2023",
    title: "CURSO DESENVOLVIMENTO WEB",
    place: "TRYBE",
    description:
      "Curso completo de desenvolvimento web com conteúdo de frontend, backend, python, node, docker, mongodb e sql",
  },
  {
    timeOn: "2014 - 2018",
    title: "Análise de sistemas",
    place: "Unicarioca",
    description:
      "Onde consegui a base para trilhar a carreira na área de tecnologia.",
  },
];
