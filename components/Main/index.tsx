import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return <main className="max-w-7xl m-auto px-4 md:px-[84px]">{children}</main>;
};

export default Main;
