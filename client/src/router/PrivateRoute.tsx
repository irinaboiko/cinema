import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./routeNames";
import { useTypedSelector } from "../hooks";

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return isAuth ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
