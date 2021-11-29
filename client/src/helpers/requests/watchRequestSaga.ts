import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";

import { SendRequestAction } from "../../types";
import apiCallsMapping from "../../api/apiCallsMapping";
import createActionWithPostfix from "./actionPostfixCreator";
import { POSTFIXES } from "../../constants/actionPostfixes";

function* sendRequest(action: SendRequestAction) {
  try {
    const foundApiCall = apiCallsMapping(action.type);

    const response: AxiosResponse = yield call(foundApiCall, action.payload);
    console.log(response);
    const generatedSuccessAction = createActionWithPostfix(
      action,
      response.data,
      POSTFIXES.SUCCESS_POSTFIX
    );

    yield put(generatedSuccessAction);
  } catch (error) {
    const err = error as AxiosError;

    const generatedFailAction = createActionWithPostfix(
      action,
      err.response?.data.message,
      POSTFIXES.FAIL_POSTFIX
    );

    yield put(generatedFailAction);
  }
}

const isApiCallAction = (action: SendRequestAction): boolean => {
  return action.type.endsWith(POSTFIXES.REQUEST_POSTFIX);
};

function* watchRequest() {
  yield takeEvery(isApiCallAction, sendRequest);
}

export default watchRequest;
