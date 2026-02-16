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
import routeLinks from "./routeLinks";

const baseLevelRoutes = [
  {
    path: routeLinks.basePath,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routeLinks.client.signup,
        middleware: [clientGuestMiddleware],
        element: (
          <div>
            Client Signup <Outlet />
          </div>
        ),
      },
      {
        path: routeLinks.client.login,
        middleware: [clientGuestMiddleware],
        element: <div>Client Login</div>,
      },
    ],
  },
];

const clientRoutes = [
  {
    path: routeLinks.client.home,
    middleware: [clientProtectMiddleware],
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <ClientHomePage />,
      },
      {
        path: routeLinks.client.profile,
        Component: ClientProfile,
      },
    ],
  },
];

const advisorRoutes = [
  {
    path: routeLinks.advisor.home,
    element: <AdvisorLayout />,
    children: [
      {
        index: true,
        element: <div>Advisor</div>,
      },
      {
        path: routeLinks.advisor.login,
        element: <div>Advisor Login</div>,
      },
      {
        path: routeLinks.advisor.signup,
        element: <div>Advisor Signup</div>,
      },
      {
        path: "dashboard",
        element: <div>Advisor Dashboard</div>,
      },
    ],
  },
];

const caseManagerRoutes = [
  {
    path: routeLinks.caseManager.home,
    element: <CaseManagerLayout />,
    children: [
      {
        index: true,
        element: <div>Case Manager</div>,
      },
      {
        path: routeLinks.caseManager.login,
        element: <div>Case Manager Login</div>,
      },
      {
        path: routeLinks.caseManager.signup,
        element: <div>Case Manager Signup</div>,
      },
    ],
  },
];

const adminRoutes = [
  {
    path: routeLinks.admin.home,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <div>Admin</div>,
      },
      {
        path: routeLinks.admin.login,
        element: <div>Admin Login</div>,
      },
      {
        path: routeLinks.admin.signup,
        element: <div>Admin Signup</div>,
      },
      {
        path: routeLinks.admin.dashboard,
        element: <div>Admin Dashboard</div>,
      },
    ],
  },
];

const router = createBrowserRouter(
  [
    ...baseLevelRoutes,
    ...clientRoutes,
    ...advisorRoutes,
    ...caseManagerRoutes,
    ...adminRoutes,
  ],
  {
    future: {
      v8_middleware: true,
    },
  },
);

export default router;
