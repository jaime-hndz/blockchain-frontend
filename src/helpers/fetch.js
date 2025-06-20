const API_URL = import.meta.env.VITE_API_URL;
export const fetchAPI = async (endpoint, options = {}, method = 'GET') => {
  const url = `${API_URL}${endpoint}`;

  const config = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method.toUpperCase() !== 'GET') {
    config.body = JSON.stringify(options);
  } else {
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
