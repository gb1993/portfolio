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
    <>
      <h1 className="sr-only lg:hidden">
        {title} {highlight}
      </h1>
      <div className="hidden relative lg:flex w-fit mx-auto mb-20 items-center justify-center">
        <span
          aria-hidden="true"
          className={`lg:inline text-black-secondary font-extrabold text-[110px] leading-0 z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            whatMode ? "opacity-70" : "opacity-5"
          } hidden`}
        >
          {backTitle}
        </span>
        <h1 className="text-dark-or-light-secondary font-extrabold text-[56px] z-[1]">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
      </div>
    </>
  );
};

export default Title;
