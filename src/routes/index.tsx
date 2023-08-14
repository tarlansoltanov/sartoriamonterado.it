import { Navigate } from "react-router-dom";

import { Home, Philosophy, Error } from "src/pages";

const publicRoutes = [
  {
    path: "/",
    component: <Navigate to="/home" />,
  },
  {
    path: "/home",
    component: <Home />,
  },
  {
    path: "/philosophy",
    component: <Philosophy />,
  },
  {
    path: "*",
    component: <Error />,
  },
];

export { publicRoutes };
