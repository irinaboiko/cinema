import React, { FC, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import MoviesPageLayout from "../components/MoviesPageLayout";
import { GET_MOVIES_REQUEST } from "../actions";
import { useTypedSelector } from "../../../hooks";
import { useNavigate } from "react-router-dom";

const MoviesPageContainer: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { moviesList } = useTypedSelector((state) => state.moviesPage);

  useEffect(() => {
    dispatch(GET_MOVIES_REQUEST());
  }, [dispatch]);

  const handleGoToMovieDetailsPage = useCallback(
    (id) => {
      console.log(id);
      //navigate(`${ROUTES.MOVIES}/${id}`);
    },
    [navigate]
  );

  return (
    <MoviesPageLayout
      moviesList={moviesList}
      handleGoToMovieDetailsPage={handleGoToMovieDetailsPage}
    />
  );
};

export default MoviesPageContainer;
