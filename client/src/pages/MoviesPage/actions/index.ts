import { createActionCreator } from "deox";

import { CustomPayload } from "../../../helpers/requests/actionPostfixCreator";

interface MovieResponsePayload extends CustomPayload {}

export const GET_MOVIES_REQUEST = createActionCreator(
  "GET_MOVIES_REQUEST",
  (resolve) => () => resolve()
);
export const GET_MOVIES_SUCCESS = createActionCreator(
  "GET_MOVIES_SUCCESS",
  (resolve) => (payload: MovieResponsePayload) => resolve(payload)
);
export const GET_MOVIES_FAIL = createActionCreator(
  "GET_MOVIES_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);
