import { createReducer } from "deox";

import { IMovie } from "../dto/movie.dtos";
import * as actions from "../actions";

interface IMovieState {
  moviesList: IMovie[];
  isLoading: boolean;
  errors: null | string;
}

const defaultState: IMovieState = {
  moviesList: [],
  isLoading: false,
  errors: null,
};

const moviesPageReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.GET_MOVIES_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null,
    };
  }),
  handleAction(actions.GET_MOVIES_SUCCESS, (state, { payload }) => {
    return {
      ...state,
      moviesList: payload.response,
      isLoading: false,
      errors: null,
    };
  }),
  handleAction(actions.GET_MOVIES_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response,
    };
  }),
]);

export default moviesPageReducer;
