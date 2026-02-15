import { createBrowserRouter, Outlet } from "react-router";
import ClientLayout from "../layouts/ClientLayout";
import AdvisorLayout from "../layouts/AdvisorLayout";
import CaseManagerLayout from "../layouts/CaseManagerLayout";
import AdminLayout from "../layouts/AdminLayout";
import ClientProfile from "../pages/ClientModule/ClientProfile";
import Home from "../pages/LandingModule/Home";
import ClientHomePage from "../pages/ClientModule/Home";
import {
  clientProtectMiddleware,
  clientGuestMiddleware,
} from "../middleware/authMiddleware";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/client",
      element: <ClientLayout />,
      children: [
        {
          middleware: [clientProtectMiddleware],
          children: [
            {
              index: true,
              element: <ClientHomePage />,
            },
          ],
        },
        {
          middleware: [clientGuestMiddleware],
          children: [
            {
              path: "client-login",
              element: <div>Client Login</div>,
            },
            {
              path: "client-signup",
              element: (
                <div>
                  Client Signup <Outlet />
                </div>
              ),
              children: [
                {
                  path: ":id",
                  loader: ({ params }) => {
                    return `Client id: ${params.id}`;
                  },
                  Component: ClientProfile,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/Advisor",
      element: <AdvisorLayout />,
      children: [
        {
          index: true,
          element: <div>Advisor</div>,
        },
        {
          path: "login",
          element: <div>Advisor Login</div>,
        },
        {
          path: "signup",
          element: <div>Advisor Signup</div>,
        },
        {
          path: "dashboard",
          element: <div>Advisor Dashboard</div>,
        },
      ],
    },
    {
      path: "/Case-Manager",
      element: <CaseManagerLayout />,
      children: [
        {
          index: true,
          element: <div>Case Manager</div>,
        },
        {
          path: "login",
          element: <div>Case Manager Login</div>,
        },
        {
          path: "signup",
          element: <div>Case Manager Signup</div>,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <div>Admin</div>,
        },
        {
          path: "login",
          element: <div>Admin Login</div>,
        },
        {
          path: "signup",
          element: <div>Admin Signup</div>,
        },
        {
          path: "dashboard",
          element: <div>Admin Dashboard</div>,
        },
      ],
    },
  ],
  {
    future: {
      v8_middleware: true,
    },
  },
);

export default router;
