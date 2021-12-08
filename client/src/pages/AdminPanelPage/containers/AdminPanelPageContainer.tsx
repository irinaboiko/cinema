import React, { FC, useCallback, useEffect } from "react";

import AdminPanelPageLayout from "../components/AdminPanelPageLayout";
import { useTypedSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import { DELETE_MOVIE_REQUEST, GET_ADMIN_MOVIES_REQUEST } from "../actions";

const AdminPanelPageContainer: FC = () => {
  const dispatch = useDispatch();

  const { moviesList, moviesTotalCount, currentPage, isLoading } =
    useTypedSelector((state) => state.adminPage);

  const pagesCount = Math.ceil(moviesTotalCount / 5);

  const handleDeleteMovie = useCallback(
    (id: string) => {
      //event.preventDefault();
      dispatch(DELETE_MOVIE_REQUEST(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(GET_ADMIN_MOVIES_REQUEST(currentPage));
  }, [dispatch, currentPage]);

  return (
    <AdminPanelPageLayout
      moviesList={moviesList}
      isLoading={isLoading}
      currentPage={currentPage}
      pagesCount={pagesCount}
      handleDeleteMovie={handleDeleteMovie}
    />
  );
};

export default AdminPanelPageContainer;
