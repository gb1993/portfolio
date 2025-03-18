interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <main className="w-full max-w-7xl m-auto p-4 md:p-[84px] min-h-dvh animate-opacity-page">{children}</main>
  );
};

export default Container;
