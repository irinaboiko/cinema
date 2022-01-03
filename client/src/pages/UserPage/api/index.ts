import { AxiosResponse } from "axios";

import {
  getUserMoviesCollectionRequestDto,
  UserMoviesCollectionResponseDto,
} from "../dto/user.dtos";
import api from "../../../api/config";

export const getUserMoviesCollection = (
  body: getUserMoviesCollectionRequestDto
): Promise<AxiosResponse<UserMoviesCollectionResponseDto>> => {
  const { userId, option } = body;
  return api.get(`userMovie/?userId=${userId}&option=${option}`);
};
