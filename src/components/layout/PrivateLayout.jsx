import React from "react";
import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";

export const PrivateLayout = () => {
  return (
    <>
      <div className="max-w-screen h-[5vh] bg-red-100 flex justify-between items-center px-10">
        <div>
        RETO-BLOCKCHAIN
        </div>
        <Button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("admin");
            window.location.href = "/login";
          }}
        >
          Cerrar sesión
        </Button>
      </div>
      <div className="mex-w-screen h-[95vh] bg-blue-100 py-10 px-40">
        <Outlet />
      </div>
    </>
  );
};
