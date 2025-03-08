const getGreetings = () => {
  const dataBrasilia = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  const horaBrasilia = new Date(dataBrasilia).getHours();
  if (horaBrasilia >= 5 && horaBrasilia < 12) {
    return "BOM DIA!";
  } else if (horaBrasilia >= 12 && horaBrasilia < 18) {
    return "BOA TARDE!";
  } else {
    return "BOA NOITE!";
  }
};

export default getGreetings;
