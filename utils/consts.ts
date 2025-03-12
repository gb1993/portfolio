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
  "w-full py-3 px-6.5 border-2 border-transparent rounded-full bg-black-secondary/30 outline-none focus:border-primary text-dark-or-light-secondary placeholder:text-dark-or-light-secondary";
export const contactTextAreaCss =
  "w-full rounded-3xl py-3 px-6.5 border-2 border-transparent bg-black-secondary/30 outline-none focus:border-primary text-dark-or-light-secondary placeholder:text-dark-or-light-secondary";
export const socialMediaIconCss =
  "flex items-center justify-center bg-black-secondary hover:bg-primary w-10 h-10 rounded-full";

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
