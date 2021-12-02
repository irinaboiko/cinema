import { createReducer } from "deox";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";
import * as actions from "../actions";

interface IMovieDetailsState {
  movieInfo: IMovie | {};
  isLoading: boolean;
  errors: null | string;
}

const defaultState: IMovieDetailsState = {
  movieInfo: {},
  isLoading: false,
  errors: null,
};

const movieDetailsPageReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.GET_MOVIE_DETAILS_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null,
    };
  }),
  handleAction(actions.GET_MOVIE_DETAILS_SUCCESS, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      movieInfo: payload.response,
    };
  }),
  handleAction(actions.GET_MOVIE_DETAILS_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response,
    };
  }),
]);

export default movieDetailsPageReducer;
