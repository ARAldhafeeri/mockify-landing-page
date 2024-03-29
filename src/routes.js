import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";


const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default MainRouter;