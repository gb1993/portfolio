"use client";
import { useColor } from "@/context/ColorContext";

interface Props {
  title: string;
  backTitle?: string;
  highlight?: string;
}

const Title = ({ title, backTitle, highlight }: Props) => {
  const { mode } = useColor();
  const whatMode = mode === "dark";
  return (
    <div className="p-4 fixed top-0 z-10 lg:z-auto left-0 w-full lg:w-fit mx-auto mb-20 lg:relative lg:flex items-center justify-center bg-black-secondary lg:bg-transparent">
      <h2
        className={`lg:inline text-black-secondary font-extrabold text-[110px] leading-0 z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          whatMode ? "opacity-70" : "opacity-5"
        } hidden`}
      >
        {backTitle}
      </h2>
      <h1 className="text-[28px] text-dark-or-light-secondary font-extrabold lg:text-[56px] z-[1]">
        {title} <span className="text-primary">{highlight}</span>
      </h1>
    </div>
  );
};

export default Title;
