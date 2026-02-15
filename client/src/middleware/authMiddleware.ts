import { redirect, type LoaderFunctionArgs } from "react-router";

export const clientProtectMiddleware = async (
  _args: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("clientIsLogin") === "true";
  if (!isLogin) {
    return redirect("/client/client-login");
  }
  return next();
};

export const clientGuestMiddleware = async (
  { request }: LoaderFunctionArgs,
  next: () => Promise<unknown>,
) => {
  const isLogin = localStorage.getItem("clientIsLogin") === "true";
  if (isLogin) {
    if (typeof window !== "undefined") {
      const url = new URL(request.url);
      const isSignup = url.pathname.includes("client-signup");
      const pageName = isSignup ? "sign up" : "login";

      window.alert(
        `Your already logined in user. If you need to go ${pageName} need to logout first.`,
      );
    }
    return redirect("/client");
  }
  return next();
};
