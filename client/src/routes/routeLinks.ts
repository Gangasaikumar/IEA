const clientRoutes = {
  home: "/client",
  login: "/client/login",
  signup: "/client/signup",
  profile: "/client/profile",
};

const advisorRoutes = {
  home: "/advisor",
  login: "/advisor/login",
};

const caseManagerRoutes = {
  home: "/case-manager",
  login: "/case-manager/login",
};

const adminRoutes = {
  home: "/admin",
  login: "/admin/login",
  // signup: "/admin/signup",
  dashboard: "/admin/dashboard",
};

const routeLinks = {
  basePath: "/",
  client: clientRoutes,
  advisor: advisorRoutes,
  caseManager: caseManagerRoutes,
  admin: adminRoutes,
};

export default routeLinks;
