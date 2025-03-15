const getGreetings = () => {
  // Obtendo a hora em Brasília diretamente com o fuso horário de São Paulo
  const horaBrasilia = new Date()
    .toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    })
    .split(" ")[1]
    .split(":")[0]; // Pegando a hora
  const nHoraBrasilia = Number(horaBrasilia);
  if (nHoraBrasilia >= 5 && nHoraBrasilia < 12) {
    return "BOM DIA!";
  } else if (nHoraBrasilia >= 12 && nHoraBrasilia < 18) {
    return "BOA TARDE!";
  } else {
    return "BOA NOITE!";
  }
};

export default getGreetings;
