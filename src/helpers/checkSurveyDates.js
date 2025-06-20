export function checkSurveyDates(fechaInicio, fechaFin) {
  const inicio = new Date(fechaInicio.replace(' ', 'T'));
  const fin = new Date(fechaFin.replace(' ', 'T'));
  const ahora = new Date();

  return ahora >= inicio && ahora <= fin;
}

export function checkEndSurveyDate(fechaFin) {
  const fin = new Date(fechaFin.replace(' ', 'T'));
  const ahora = new Date();

  return ahora <= fin;
}