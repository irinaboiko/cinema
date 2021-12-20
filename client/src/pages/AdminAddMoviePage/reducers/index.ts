import { createReducer } from "deox";

import * as actions from "../actions";

interface IAddMovieState {
  isLoading: boolean;
  errors: null | string;
  successMessage: string;
  isShowModal: boolean;
}

const defaultState: IAddMovieState = {
  isLoading: false,
  errors: null,
  successMessage: "",
  isShowModal: false,
};

const adminAddMoviePageReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.ADD_MOVIE_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null,
    };
  }),
  handleAction(actions.ADD_MOVIE_SUCCESS, (state, { payload }) => {
    return {
      ...state,
      successMessage: payload.response.message,
      isLoading: false,
      isShowModal: true,
      errors: null,
    };
  }),
  handleAction(actions.ADD_MOVIE_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response,
    };
  }),

  handleAction(actions.CLOSE_MODAL, (state) => {
    return {
      ...state,
      isLoading: false,
      isShowModal: false,
      successMessage: "",
    };
  }),
]);

export default adminAddMoviePageReducer;
