import { createActionCreator } from "deox";

import { addMovieRequestDto } from "../../AdminPanelPage/dto/adminPage.dtos";
import { CustomPayload } from "../../../helpers/requests/actionPostfixCreator";

interface AddMovieResponsePayload extends CustomPayload {}

export const ADD_MOVIE_REQUEST = createActionCreator(
  "ADD_MOVIE_REQUEST",
  (resolve) => (payload: addMovieRequestDto) => resolve(payload)
);
export const ADD_MOVIE_SUCCESS = createActionCreator(
  "ADD_MOVIE_SUCCESS",
  (resolve) => (payload: AddMovieResponsePayload) => resolve(payload)
);
export const ADD_MOVIE_FAIL = createActionCreator(
  "ADD_MOVIE_FAIL",
  (resolve) => (payload: CustomPayload) => resolve(payload)
);

export const CLOSE_MODAL = createActionCreator(
  "CLOSE_MODAL",
  (resolve) => () => resolve()
);
