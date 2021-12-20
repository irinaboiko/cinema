import { AxiosResponse } from "axios";

import {
  addMovieRequestDto,
  AddMovieResponseDTO,
} from "../../AdminPanelPage/dto/adminPage.dtos";
import api from "../../../api/config";

export const addMovie = (
  body: addMovieRequestDto
): Promise<AxiosResponse<AddMovieResponseDTO>> => {
  return api.post("movie", body);
};
