import { Navigate } from "react-router-dom";

import * as Pages from "@/pages";

const publicRoutes = [
  {
    path: "/",
    component: <Navigate to="/home" />,
  },
  {
    path: "/home",
    component: <Pages.Home />,
  },
  {
    path: "/about",
    component: <Pages.About />,
  },
  {
    path: "/philosophy",
    component: <Pages.Philosophy />,
  },
  {
    path: "*",
    component: <Pages.Error />,
  },
];

export { publicRoutes };
