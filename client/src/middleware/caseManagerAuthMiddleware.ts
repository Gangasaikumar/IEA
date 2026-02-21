import { redirect, type LoaderFunctionArgs } from "react-router";
import routeLinks from "../routes/routeLinks";

export const caseManagerProtectMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("caseManagerIsLogin") === "true";
  return isLogin ? next() : redirect(routeLinks.caseManager.login);
};

export const caseManagerGuestMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("caseManagerIsLogin") === "true";
  return isLogin ? redirect(routeLinks.caseManager.home) : next();
};
