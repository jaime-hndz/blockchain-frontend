import { Button } from '@/components/ui/button';
import React from 'react';
import { Input } from '@/components/ui/input';

export const LoginPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Iniciar sesión</h2>
        
        <div className="space-y-4">
          <Input placeholder="Correo electrónico" type="email" className="w-full" />
          <Input placeholder="Contraseña" type="password" className="w-full" />
        </div>

        <Button
          className="w-full"
          onClick={() => {
            localStorage.setItem('user', JSON.stringify({ name: 'jaime' }));
            window.location.href = '/';
          }}
        >
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
};
