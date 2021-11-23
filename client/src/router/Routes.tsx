import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routeNames";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import UserPageContainer from "../pages/UserPage/containers/UserPageContainer";
import MoviesPageContainer from "../pages/MoviesPage/containers/MoviesPageContainer";
import AdminPanelPageContainer from "../pages/AdminPanelPage/containers/AdminPanelPageContainer";

const RoutesComponent: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPageContainer />} />
      <Route path={ROUTES.HOME} element={<HomePageContainer />} />
      <Route path={ROUTES.USER} element={<UserPageContainer />} />
      <Route path={ROUTES.MOVIES} element={<MoviesPageContainer />} />
      <Route path={ROUTES.ADMIN} element={<AdminPanelPageContainer />} />
    </Routes>
  );
};

export default RoutesComponent;
