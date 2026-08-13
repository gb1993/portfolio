import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  link: string;
  target?: string;
  text?: string;
  download?: boolean;
  icon?: ReactNode;
}

const ButtonLink = ({
  link = "",
  target = "_blank",
  text = "ENVIAR",
  download = false,
  icon,
}: Props) => {
  return (
    <Link
      href={link}
      download={download}
      target={target}
      className="hover:bg-primary font-bold w-full lg:w-fit flex items-center justify-center gap-2 text-dark-or-light-secondary border-2 border-primary px-8 py-2 rounded-full"
    >
      {icon && (
        <span aria-hidden="true" className="flex shrink-0">
          {icon}
        </span>
      )}
      {text}
    </Link>
  );
};

export default ButtonLink;
