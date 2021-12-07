import { AxiosResponse } from "axios";

import api from "../../../api/config";
import { MoviesResponseDto } from "../dto/movie.dtos";

export const getMovies = (
  page: number
): Promise<AxiosResponse<MoviesResponseDto>> => {
  return api.get(`movie?page=${page}`);
};
