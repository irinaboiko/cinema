import { createReducer } from "deox";

import * as actions from "../actions";
import { LoginResponseDto } from "../dto/login.dtos";

interface ILoginState {
  userInfo: LoginResponseDto;
  isLoading: boolean;
  isAuth: boolean;
  errors: null | string;
}

const defaultState: ILoginState = {
  userInfo: {
    _id: "",
    name: "",
    email: "",
    role: "",
  },
  isAuth: false,
  isLoading: false,
  errors: null,
};

const loginReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.LOGIN_REQUEST, (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null,
    };
  }),
  handleAction(actions.LOGIN_SUCCESS, (state, { payload }) => {
    console.log(payload);

    return {
      ...state,
      userInfo: payload.response.user,
      isAuth: true,
      isLoading: false,
      errors: null,
    };
  }),
  handleAction(actions.LOGIN_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      isAuth: false,
      errors: payload.response,
    };
  }),
]);

export default loginReducer;
