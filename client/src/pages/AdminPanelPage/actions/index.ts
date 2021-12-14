import { createActionCreator } from "deox";

import { CustomPayload } from "../../../helpers/requests/actionPostfixCreator";
import { addMovieRequestDto } from "../dto/adminPage.dtos";

interface AdminMovieResponsePayload extends CustomPayload {}

export const GET_ADMIN_MOVIES_REQUEST = createActionCreator(
  "GET_ADMIN_MOVIES_REQUEST",
  (resolve) => (payload: number) => resolve(payload)
);
export const GET_ADMIN_MOVIES_SUCCESS = createActionCreator(
  "GET_ADMIN_MOVIES_SUCCESS",
  (resolve) => (payload: AdminMovieResponsePayload) => resolve(payload)
);
export const GET_ADMIN_MOVIES_FAIL = createActionCreator(
  "GET_ADMIN_MOVIES_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);

export const ADD_MOVIE_REQUEST = createActionCreator(
  "ADD_MOVIE_REQUEST",
  (resolve) => (payload: addMovieRequestDto) => resolve(payload)
);
export const ADD_MOVIE_SUCCESS = createActionCreator(
  "ADD_MOVIE_SUCCESS",
  (resolve) => (payload: AdminMovieResponsePayload) => resolve(payload)
);
export const ADD_MOVIE_FAIL = createActionCreator(
  "ADD_MOVIE_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);

export const DELETE_MOVIE_REQUEST = createActionCreator(
  "DELETE_MOVIE_REQUEST",
  (resolve) => (payload: string) => resolve(payload)
);
export const DELETE_MOVIE_SUCCESS = createActionCreator(
  "DELETE_MOVIE_SUCCESS",
  (resolve) => (payload: AdminMovieResponsePayload) => resolve(payload)
);
export const DELETE_MOVIE_FAIL = createActionCreator(
  "DELETE_MOVIE_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);

export const CHANGE_ADMIN_PAGE = createActionCreator(
  "CHANGE_PAGE",
  (resolve) => (payload: number) => resolve(payload)
);

export const CLOSE_MODAL = createActionCreator(
  "CLOSE_MODAL",
  (resolve) => () => resolve()
);
