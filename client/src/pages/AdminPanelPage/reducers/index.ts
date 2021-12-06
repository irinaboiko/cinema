import * as actions from "../actions";

import { IMovie } from "../../MoviesPage/dto/movie.dtos";
import { createReducer } from "deox";

interface IAdminState {
  moviesList: IMovie[];
  isLoading: boolean;
  errors: null | string;
}

const defaultState: IAdminState = {
  moviesList: [],
  isLoading: false,
  errors: null,
};

const adminPageReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.GET_ADMIN_MOVIES_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null,
    };
  }),
  handleAction(actions.GET_ADMIN_MOVIES_SUCCESS, (state, { payload }) => {
    return {
      ...state,
      moviesList: payload.response,
      isLoading: false,
      errors: null,
    };
  }),
  handleAction(actions.GET_ADMIN_MOVIES_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response,
    };
  }),

  handleAction(actions.DELETE_MOVIE_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null,
    };
  }),
  handleAction(actions.DELETE_MOVIE_SUCCESS, (state, { payload }) => {
    const moviesListCopy = [...state.moviesList];
    const id = payload;

    const updatedMoviesList = moviesListCopy.filter(
      (movie) => movie._id !== id
    );

    return {
      ...state,
      moviesList: updatedMoviesList,
      isLoading: false,
      errors: null,
    };
  }),
  handleAction(actions.DELETE_MOVIE_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response,
    };
  }),
]);

export default adminPageReducer;
