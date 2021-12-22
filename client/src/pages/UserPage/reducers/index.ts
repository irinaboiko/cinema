import { createReducer } from "deox";

import * as actions from "../actions";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";

interface IUserMovieState {
  moviesCollectionList: IMovie[];
  isLoading: boolean;
  errors: null | string;
}

const defaultState: IUserMovieState = {
  moviesCollectionList: [],
  isLoading: false,
  errors: null,
};

const userPageReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.GET_USER_MOVIES_COLLECTION_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null,
    };
  }),
  handleAction(
    actions.GET_USER_MOVIES_COLLECTION_SUCCESS,
    (state, { payload }) => {
      return {
        ...state,
        moviesCollectionList: payload.response,
        isLoading: false,
        errors: null,
      };
    }
  ),
  handleAction(
    actions.GET_USER_MOVIES_COLLECTION_FAIL,
    (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response,
      };
    }
  ),
]);

export default userPageReducer;
