import { redirect, type LoaderFunctionArgs } from "react-router";
import routeLinks from "../routes/routeLinks";

export const advisorProtectMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("advisorIsLogin") === "true";
  return isLogin ? next() : redirect(routeLinks.advisor.login);
};

export const advisorGuestMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("advisorIsLogin") === "true";
  return isLogin ? redirect(routeLinks.advisor.home) : next();
};
