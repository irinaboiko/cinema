import React, { FC } from "react";

import AdminPanelPageLayout from "../components/AdminPanelPageLayout";
import { useTypedSelector } from "../../../hooks";

const AdminPanelPageContainer: FC = () => {
  const { moviesList } = useTypedSelector((state) => state.moviesPage);
  console.log(moviesList);

  return <AdminPanelPageLayout moviesList={moviesList} />;
};

export default AdminPanelPageContainer;
