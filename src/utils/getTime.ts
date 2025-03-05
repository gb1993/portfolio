const greetings = () => {
  const dataBrasilia = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  const horaBrasilia = new Date(dataBrasilia).getHours();
  if (horaBrasilia >= 5 && horaBrasilia < 12) {
    return "Bom dia";
  } else if (horaBrasilia >= 12 && horaBrasilia < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
};

export default greetings;
