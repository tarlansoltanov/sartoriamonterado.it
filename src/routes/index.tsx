import { Navigate } from "react-router-dom";

import { Home, Error } from "src/pages";

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
    path: "*",
    component: <Error />,
  },
];

export { publicRoutes };
