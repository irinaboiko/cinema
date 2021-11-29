import { AxiosResponse } from "axios";

import api from "../../../api/config";
import { MoviesResponseDto } from "../dto/movie.dtos";

export const getMovies = (): Promise<AxiosResponse<MoviesResponseDto>> => {
  return api.get("movie");
};
