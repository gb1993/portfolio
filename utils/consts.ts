/* CSS CONSTS */
export const floatBarItemCss = `
  cursor-pointer relative flex items-center justify-center w-13 h-13 rounded-full bg-black-secondary text-white
  hover:bg-primary
`;
export const floatBarItemTitleCss = `
  bg-primary pointer-events-none pr-0 w-fit overflow-hidden rounded-full w-13 flex items-center justify-center gap-2 font-bold opacity-0 h-full absolute right-0 !transition-all !duration-300
  group-hover:opacity-100 group-hover:pl-8 group-hover:pr-14 group-hover:pointer-events-auto
`;

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
