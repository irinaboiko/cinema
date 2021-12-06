import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_MOVIE_DETAILS_REQUEST } from "../actions";

import MovieDetailsPageLayout from "../components/MovieDetailsPageLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks";

const MovieDetailsPageContainer: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movieInfo, isLoading } = useTypedSelector(
    (state) => state.movieDetailsPage
  );

  useEffect(() => {
    dispatch(GET_MOVIE_DETAILS_REQUEST(id));
  }, [dispatch, id]);

  const handleOnBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <MovieDetailsPageLayout
      movieInfo={movieInfo}
      isLoading={isLoading}
      handleOnBackButtonClick={handleOnBackButtonClick}
    />
  );
};

export default MovieDetailsPageContainer;
