import { Navigate, Outlet } from "react-router";

const ClientGuestMiddleware = () => {
  const isLogin = localStorage.getItem("clientIsLogin") === "true";

  if (isLogin) {
    return <Navigate to="/client" replace />;
  }

  return <Outlet />;
};

export default ClientGuestMiddleware;
