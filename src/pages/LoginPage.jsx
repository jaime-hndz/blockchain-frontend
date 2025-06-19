import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import logo from "@/assets/logo.svg"; 
import { fetchAPI } from '@/helpers/fetch';
const TESTING = import.meta.env.VITE_TESTING === 'true'

export const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleLogin = async () => {
  if (!name.trim()) {
    setError('Por favor, ingresa tu nombre');
    return;
  }

  try {
    if (!TESTING) {
      // eslint-disable-next-line no-unused-vars
      const response = await fetchAPI('/login', { name }, 'POST');
    }

    if (name === 'admin') {
      localStorage.setItem('admin', JSON.stringify(true));
    }

    localStorage.setItem('user', JSON.stringify({ name }));

    window.location.href = '/';
  } catch (error) {
    console.error('Error en el login:', error);
    setError('Error al iniciar sesión. Verifica tu conexión o tus credenciales.');
  }
};

  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm space-y-6">
        <img src={logo} alt="Logo" className="w-48 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 text-center">Iniciar sesión</h2>

        <div className="space-y-4">
          <Input
            placeholder="Nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
          <Input
            placeholder="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <Input
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <Button className="w-full" onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
};
