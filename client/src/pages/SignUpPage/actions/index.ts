import { createActionCreator } from "deox";

import { SignUpDto } from "../dto/signUp.dtos";
import { CustomPayload } from "../../../helpers/requests/actionPostfixCreator";

interface SignUpResponsePayload extends CustomPayload {}

export const SIGN_UP_REQUEST = createActionCreator(
  "SIGN_UP_REQUEST",
  (resolve) => (payload: SignUpDto) => resolve(payload)
);
export const SIGN_UP_SUCCESS = createActionCreator(
  "SIGN_UP_SUCCESS",
  (resolve) => (payload: SignUpResponsePayload) => resolve(payload)
);
export const SIGN_UP_FAIL = createActionCreator(
  "SIGN_UP_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);
export const CLOSE_MODAL = createActionCreator(
  "CLOSE_MODAL",
  (resolve) => () => resolve()
);
