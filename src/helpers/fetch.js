import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAPI = async (endpoint, options = {}, method = 'GET') => {
  const url = `${API_URL}${endpoint}`;

  try {
    const response = await axios({
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(method.toUpperCase() === 'GET'
        ? { params: options }
        : { data: options }),
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 'Network';
      const message = error.response?.data || error.message;
      throw new Error(`Error ${status}: ${JSON.stringify(message)}`);
    } else {
      throw new Error('Unexpected error occurred');
    }
  }
};