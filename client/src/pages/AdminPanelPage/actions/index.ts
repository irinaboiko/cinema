import { createActionCreator } from "deox";

import { CustomPayload } from "../../../helpers/requests/actionPostfixCreator";

interface AdminMovieResponsePayload extends CustomPayload {}

export const GET_ADMIN_MOVIES_REQUEST = createActionCreator(
  "GET_ADMIN_MOVIES_REQUEST",
  (resolve) => () => resolve()
);
export const GET_ADMIN_MOVIES_SUCCESS = createActionCreator(
  "GET_ADMIN_MOVIES_SUCCESS",
  (resolve) => (payload: AdminMovieResponsePayload) => resolve(payload)
);
export const GET_ADMIN_MOVIES_FAIL = createActionCreator(
  "GET_ADMIN_MOVIES_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);

export const DELETE_MOVIE_REQUEST = createActionCreator(
  "DELETE_MOVIE_REQUEST",
  (resolve) => (payload: string) => resolve(payload)
);
export const DELETE_MOVIE_SUCCESS = createActionCreator(
  "DELETE_MOVIE_SUCCESS",
  (resolve) => (payload: string) => resolve(payload)
);
export const DELETE_MOVIE_FAIL = createActionCreator(
  "DELETE_MOVIE_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);
