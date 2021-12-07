import * as actions from "../actions";

import { IMovie } from "../../MoviesPage/dto/movie.dtos";
import { createReducer } from "deox";
import { CHANGE_ADMIN_PAGE } from "../actions";

interface IAdminState {
  moviesList: IMovie[];
  moviesTotalCount: number;
  currentPage: number;
  isLoading: boolean;
  errors: null | string;
}

const defaultState: IAdminState = {
  moviesList: [],
  moviesTotalCount: 0,
  currentPage: 1,
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
      moviesList: payload.response.movies,
      moviesTotalCount: payload.response.count,
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

  handleAction(actions.CHANGE_ADMIN_PAGE, (state, { payload }) => {
    return {
      ...state,
      currentPage: payload,
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
    const id = payload.response;

    const index = moviesListCopy.findIndex((movie) => movie._id == id);

    const updatedMoviesList = [
      ...moviesListCopy.slice(0, index),
      ...moviesListCopy.slice(index + 1),
    ];

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
