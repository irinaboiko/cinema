import React, { FC, useEffect } from "react";

import AdminPanelPageLayout from "../components/AdminPanelPageLayout";
import { useTypedSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import { DELETE_MOVIE_REQUEST, GET_ADMIN_MOVIES_REQUEST } from "../actions";

const AdminPanelPageContainer: FC = () => {
  const dispatch = useDispatch();

  const { moviesList, isLoading } = useTypedSelector(
    (state) => state.adminPage
  );

  useEffect(() => {
    dispatch(GET_ADMIN_MOVIES_REQUEST());
  }, [dispatch]);

  const handleDeleteMovie = (id: string) => {
    console.log(id);
    dispatch(DELETE_MOVIE_REQUEST(id));
  };

  return (
    <AdminPanelPageLayout
      moviesList={moviesList}
      isLoading={isLoading}
      handleDeleteMovie={handleDeleteMovie}
    />
  );
};

export default AdminPanelPageContainer;
