import { createReducer } from "deox";

import * as actions from "../actions";

interface SignUpState {
  isLoading: boolean;
  successMessage: string;
  isShowModal: boolean;
  errors: null | string;
}

const defaultState: SignUpState = {
  isLoading: false,
  successMessage: "",
  isShowModal: false,
  errors: null,
};

const signUpReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.SIGN_UP_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null,
    };
  }),
  handleAction(actions.SIGN_UP_SUCCESS, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      successMessage: payload.response,
      isShowModal: true,
      errors: null,
    };
  }),
  handleAction(actions.SIGN_UP_FAIL, (state, { payload }) => {
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
    };
  }),
]);

export default signUpReducer;
