import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routeNames";
import PrivateRoute from "./PrivateRoute";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import UserPageContainer from "../pages/UserPage/containers/UserPageContainer";
import MoviesPageContainer from "../pages/MoviesPage/containers/MoviesPageContainer";
import AdminPanelPageContainer from "../pages/AdminPanelPage/containers/AdminPanelPageContainer";
import NotFoundPageLayout from "../pages/NotFoundPage/components/NotFoundPageLayout";
import MovieDetailsPageContainer from "../pages/MovieDetailsPage/containers/MovieDetailsPageContainer";
import SignUpPageContainer from "../pages/SignUpPage/containers/SignUpPageContainer";

const RoutesComponent: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPageLayout />} />
      <Route path={ROUTES.LOGIN} element={<LoginPageContainer />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPageContainer />} />
      <Route
        path={ROUTES.USER}
        element={
          <PrivateRoute>
            <UserPageContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.MOVIES}
        element={
          <PrivateRoute>
            <MoviesPageContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.MOVIES_DETAILS}
        element={
          <PrivateRoute>
            <MovieDetailsPageContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN}
        element={
          <PrivateRoute>
            <AdminPanelPageContainer />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutesComponent;
