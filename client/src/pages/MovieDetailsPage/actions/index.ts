import { createActionCreator } from "deox";

import { CustomPayload } from "../../../helpers/requests/actionPostfixCreator";

interface MovieDetailsPayload extends CustomPayload {}

export const GET_MOVIE_DETAILS_REQUEST = createActionCreator(
  "GET_MOVIE_DETAILS_REQUEST",
  (resolve) => (payload: string | undefined) => resolve(payload)
);
export const GET_MOVIE_DETAILS_SUCCESS = createActionCreator(
  "GET_MOVIE_DETAILS_SUCCESS",
  (resolve) => (payload: MovieDetailsPayload) => resolve(payload)
);
export const GET_MOVIE_DETAILS_FAIL = createActionCreator(
  "GET_MOVIE_DETAILS_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);
