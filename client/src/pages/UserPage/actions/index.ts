import { createActionCreator } from "deox";
import { CustomPayload } from "../../../helpers/requests/actionPostfixCreator";
import { getUserMoviesCollectionRequestDto } from "../dto/user.dtos";

interface UserMoviesCollectionPayload extends CustomPayload {}

export const GET_USER_MOVIES_COLLECTION_REQUEST = createActionCreator(
  "GET_USER_MOVIES_COLLECTION_REQUEST",
  (resolve) => (payload: getUserMoviesCollectionRequestDto) => resolve(payload)
);
export const GET_USER_MOVIES_COLLECTION_SUCCESS = createActionCreator(
  "GET_USER_MOVIES_COLLECTION_SUCCESS",
  (resolve) => (payload: UserMoviesCollectionPayload) => resolve(payload)
);
export const GET_USER_MOVIES_COLLECTION_FAIL = createActionCreator(
  "GET_USER_MOVIES_COLLECTION_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);
