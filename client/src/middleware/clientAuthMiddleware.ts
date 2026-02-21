import { redirect, type LoaderFunctionArgs } from "react-router";
import routeLinks from "../routes/routeLinks";

export const clientProtectMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("clientIsLogin") === "true";
  return isLogin ? next() : redirect(routeLinks.client.login);
  // if (!isLogin) {
  //   return redirect(routeLinks.client.login);
  // }
  // return next();
};

export const clientGuestMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("clientIsLogin") === "true";
  return isLogin ? redirect(routeLinks.client.home) : next();
  // if (isLogin) {
  //   if (typeof window !== "undefined") {
  //     const url = new URL(_args.request.url);
  //     const isSignup = url.pathname === routeLinks.client.signup;
  //     const pageName = isSignup ? "sign up" : "login";

  //     window.alert(
  //       `Your already logined in user. If you need to go ${pageName} need to logout first.`,
  //     );
  //   }
  //   return redirect(routeLinks.client.home);
  // }
  // return next();
};
