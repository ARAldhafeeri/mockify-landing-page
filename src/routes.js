import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";


const MainRouter = createBrowserRouter([
  {
    path: "mockify-landing-page/",
    element: <LandingPage />,
  },
]);

export default MainRouter;