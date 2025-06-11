import { Outlet, Navigate } from "react-router";
import { user } from "../helpers/UserProvider";
import { PrivateLayout } from "../components/layout/PrivateLayout";

export const PrivateRoutes = () => {
  return user ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : (
    <Navigate to="/login" />
  );
};
