import { Navigate, Outlet } from "react-router";

const ClientAuthMiddleware = () => {
  const isLogin = localStorage.getItem("clientIsLogin") === "true";

  if (!isLogin) {
    return <Navigate to="/client/client-login" replace />;
  }

  return <Outlet />;
};

export default ClientAuthMiddleware;
