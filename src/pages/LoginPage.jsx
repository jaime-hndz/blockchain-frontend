import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.svg";
import { fetchAPI } from "@/helpers/fetch";
const TESTING = import.meta.env.VITE_TESTING === "true";

export const LoginPage = () => {
  const [cedula, setCedula] = useState("");
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!cedula.trim()) {
      setError("Por favor, ingresa tu nombre");
      return;
    }

    try {
      if (!TESTING) {
        await fetchAPI("/login", { cedula }, "POST")
          .then((res) => {
            console.log("Login response:", res);
              localStorage.setItem("user", JSON.stringify(res));
            window.location.href = "/";
          })
          .catch((error) => {
            console.error("Error en el login:", error);
            setError(
              "Error al iniciar sesión. Verifica tu conexión o tus credenciales."
            );
          });
      }

      if (cedula === "40230927549") {
        localStorage.setItem("admin", JSON.stringify(true));
      }
    } catch (error) {
      console.error("Error en el login:", error);
      setError(
        "Error al iniciar sesión. Verifica tu conexión o tus credenciales."
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm space-y-6">
        <img src={logo} alt="Logo" className="w-48 mx-auto mb-4" />
        <div className="space-y-4">
          <Input
            placeholder="Cedula"
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            className="w-full"
          />
          {/* <Input
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
          /> */}
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <Button className="w-full" onClick={handleLogin}>
          Ingresar
        </Button>
      </div>
    </div>
  );
};
