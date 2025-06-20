export function checkSurveyDates(fechaInicio, fechaFin) {
  const inicio = new Date(fechaInicio.replace(' ', 'T'));
  const fin = new Date(fechaFin.replace(' ', 'T'));
  const ahora = new Date();

  var cumple = ahora >= inicio && ahora <= fin

  console.log(
    `Fecha actual: ${ahora}, Inicio: ${inicio}, Fin: ${fin}, Cumple: ${cumple}`
  );
  return cumple;
}

export function checkEndSurveyDate(fechaFin) {
  const fin = new Date(fechaFin.replace(' ', 'T'));
  const ahora = new Date();

  return ahora <= fin;
}