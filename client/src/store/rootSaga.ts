import { all } from "redux-saga/effects";
import watchRequestSaga from "../helpers/requests/watchRequestSaga";

function* rootSaga() {
  yield all([watchRequestSaga()]);
}

export default rootSaga;
