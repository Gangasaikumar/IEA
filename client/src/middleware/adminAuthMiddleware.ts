import { redirect, type LoaderFunctionArgs } from "react-router";
import routeLinks from "../routes/routeLinks";

export const adminProtectMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("adminIsLogin") === "true";
  return isLogin ? next() : redirect(routeLinks.admin.login);
};

export const adminGuestMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("adminIsLogin") === "true";
  return isLogin ? redirect(routeLinks.admin.home) : next();
};
