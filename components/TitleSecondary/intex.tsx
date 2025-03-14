interface Props {
  text: string;
  align?: "left" | "center" | "right";
}

const TitleSecondary = ({ text, align = "left" }: Props) => {
  const textPosition = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <h3
      className={`mb-4 text-dark-or-light-secondary text-2xl font-semibold ${textPosition[align]}`}
    >
      {text}
    </h3>
  );
};

export default TitleSecondary;
