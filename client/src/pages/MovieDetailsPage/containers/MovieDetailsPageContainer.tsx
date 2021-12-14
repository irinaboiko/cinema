import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_MOVIE_DETAILS_REQUEST } from "../actions";

import MovieDetailsPageLayout from "../components/MovieDetailsPageLayout";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks";

const MovieDetailsPageContainer: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movieInfo, isLoading } = useTypedSelector(
    (state) => state.movieDetailsPage
  );

  useEffect(() => {
    dispatch(GET_MOVIE_DETAILS_REQUEST(id));
  }, [dispatch, id]);

  return <MovieDetailsPageLayout movieInfo={movieInfo} isLoading={isLoading} />;
};

export default MovieDetailsPageContainer;
