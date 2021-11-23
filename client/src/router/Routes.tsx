import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import { ROUTES } from "./routeNames";

const Routes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={HomePageContainer} />
    </Routes>
  );
};

export default Routes;
