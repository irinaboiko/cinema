import { AxiosResponse } from "axios";

import {
  //getUserMoviesCollectionRequestDto,
  UserMoviesCollectionResponseDto,
} from "../dto/user.dtos";
import api from "../../../api/config";

export const getUserMoviesCollection = (
  //body: getUserMoviesCollectionRequestDto
  body: any
): Promise<AxiosResponse<UserMoviesCollectionResponseDto>> => {
  return api.get("userMovie", body);
};
