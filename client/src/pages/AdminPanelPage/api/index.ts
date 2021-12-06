import { AxiosResponse } from "axios";

import api from "../../../api/config";
import { MovieDetailsDto } from "../../MovieDetailsPage/dto/movieDetails.dtos";
import { MoviesResponseDto } from "../../MoviesPage/dto/movie.dtos";

export const getAdminMovies = (): Promise<AxiosResponse<MoviesResponseDto>> => {
  return api.get("movie");
};

export const deleteMovie = (
  id: MovieDetailsDto
): Promise<AxiosResponse<MovieDetailsDto>> => {
  return api.delete(`/movie/${id}`);
};
