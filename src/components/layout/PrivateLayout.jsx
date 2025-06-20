import React from "react";
import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { Spin } from "antd";
import { useSurveyContext } from "@/context/SurveyContext";
export const PrivateLayout = () => {
  const { loading } = useSurveyContext();
  return (
    <>
      {loading && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <Spin className="h-12 w-12 animate-spin text-white" />
      </div>}
      <div className="max-w-screen h-[5vh] bg-indigo-900 text-white flex justify-between items-center px-10">
        <div>
          <img src={logo} alt="Logo" className="h-35 w-35" />
        </div>
        <Button
          size={"sm"}
          variant={"ghost"}
          className={" hover:bg-blue-800 text-white hover:text-white"}
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("admin");
            window.location.href = "/login";
          }}
        >
          Cerrar sesión
        </Button>
      </div>
      <div className="mex-w-screen h-[95vh] bg-gray-100 py-10 px-40">
        <Outlet />
      </div>
    </>
  );
};
