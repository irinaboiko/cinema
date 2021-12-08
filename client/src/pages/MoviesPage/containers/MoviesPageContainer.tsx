import React, { FC, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import MoviesPageLayout from "../components/MoviesPageLayout";
import { GET_MOVIES_REQUEST } from "../actions";
import { useTypedSelector } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/routeNames";

const MoviesPageContainer: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { moviesList, moviesTotalCount, currentPage, isLoading } =
    useTypedSelector((state) => state.moviesPage);

  const handleGoToMovieDetailsPage = useCallback(
    (id) => {
      navigate(`${ROUTES.MOVIES}movies/${id}`);
    },
    [navigate]
  );

  const pagesCount = Math.ceil(moviesTotalCount / 5);

  useEffect(() => {
    dispatch(GET_MOVIES_REQUEST(currentPage));
  }, [dispatch, currentPage]);

  return (
    <MoviesPageLayout
      moviesList={moviesList}
      isLoading={isLoading}
      handleGoToMovieDetailsPage={handleGoToMovieDetailsPage}
      currentPage={currentPage}
      pagesCount={pagesCount}
    />
  );
};

export default MoviesPageContainer;
