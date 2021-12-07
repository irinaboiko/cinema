import React, { FC, useCallback, useEffect } from "react";

import AdminPanelPageLayout from "../components/AdminPanelPageLayout";
import { useTypedSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import { DELETE_MOVIE_REQUEST, GET_ADMIN_MOVIES_REQUEST } from "../actions";
import { CHANGE_PAGE } from "../../MoviesPage/actions";

const AdminPanelPageContainer: FC = () => {
  const dispatch = useDispatch();

  const { moviesList, moviesTotalCount, currentPage, isLoading } =
    useTypedSelector((state) => state.adminPage);

  const pagesCount = Math.ceil(moviesTotalCount / 5);

  const handlePageChange = useCallback(
    (event, page) => {
      if (page !== currentPage) {
        dispatch(CHANGE_PAGE(page));
      }
    },
    [currentPage]
  );

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
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      pagesCount={pagesCount}
      handleDeleteMovie={handleDeleteMovie}
    />
  );
};

export default AdminPanelPageContainer;
