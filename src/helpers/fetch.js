const API_URL = import.meta.env.API_URL;
export const fetchAPI = async (endpoint, options = {}, method = 'GET') => {
  const url = `${API_URL}${endpoint}`;

  const config = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Agregar body solo si no es GET
  if (method.toUpperCase() !== 'GET') {
    config.body = JSON.stringify(options);
  } else {
    // Agregar parámetros como query string en GET
    const queryString = new URLSearchParams(options).toString();
    if (queryString) {
      endpoint += `?${queryString}`;
    }
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Error ${response.status}: ${error}`);
  }

  return response.json();
};
