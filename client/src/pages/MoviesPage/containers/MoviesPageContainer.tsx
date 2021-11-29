import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import MoviesPageLayout from "../components/MoviesPageLayout";
import { GET_MOVIES_REQUEST } from "../actions";
import { useTypedSelector } from "../../../hooks";

const MoviesPageContainer: FC = () => {
  const dispatch = useDispatch();

  const { moviesList } = useTypedSelector((state) => state.moviesPage);

  console.log(moviesList);

  useEffect(() => {
    dispatch(GET_MOVIES_REQUEST());
  }, [dispatch]);

  return <MoviesPageLayout moviesList={moviesList} />;
};

export default MoviesPageContainer;
