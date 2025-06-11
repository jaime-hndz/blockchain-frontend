import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
        </Route>
        <Route path="/login" element={<PublicRoutes />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}
