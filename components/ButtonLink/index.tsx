import Link from "next/link";

interface Props {
  link: string;
  target?: string;
  text?: string;
  download?: boolean;
}

const ButtonLink = ({
  link = "",
  target = "_blank",
  text = "ENVIAR",
  download = false,
}: Props) => {
  return (
    <Link
      href={link}
      download={download}
      target={target}
      className="hover:bg-primary font-bold w-full lg:w-fit flex items-center justify-center text-dark-or-light-secondary border-2 border-primary px-12 py-2 rounded-full"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
