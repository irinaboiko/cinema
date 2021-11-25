import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./routeNames";

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isAuth = true;

  return isAuth ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
