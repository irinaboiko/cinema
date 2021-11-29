import * as actions from "../actions";
import { IMovie } from "../dto/movie.dtos";
import { createReducer } from "deox";

interface IMovieState {
  moviesList: IMovie[];
  isLoading: boolean;
  error: null | string;
}

const defaultState: IMovieState = {
  moviesList: [],
  isLoading: false,
  error: null,
};

const moviesPageReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.GET_MOVIES_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }),
  handleAction(actions.GET_MOVIES_SUCCESS, (state, { payload }) => {
    return {
      ...state,
      moviesList: payload.response,
      isLoading: false,
      error: null,
    };
  }),
  handleAction(actions.GET_MOVIES_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      error: payload.response,
    };
  }),
]);

export default moviesPageReducer;
