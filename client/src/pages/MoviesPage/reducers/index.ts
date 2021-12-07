import { createReducer } from "deox";

import { IMovie } from "../dto/movie.dtos";
import * as actions from "../actions";

interface IMovieState {
  moviesList: IMovie[];
  moviesTotalCount: number;
  currentPage: number;
  isLoading: boolean;
  errors: null | string;
}

const defaultState: IMovieState = {
  moviesList: [],
  moviesTotalCount: 0,
  currentPage: 1,
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
      moviesList: payload.response.movies,
      moviesTotalCount: payload.response.count,
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

  handleAction(actions.CHANGE_PAGE, (state, { payload }) => {
    return {
      ...state,
      currentPage: payload,
    };
  }),
]);

export default moviesPageReducer;
