import { AxiosResponse } from "axios";

import api from "../../../api/config";
import { MovieDetailsDto } from "../../MovieDetailsPage/dto/movieDetails.dtos";
import { MoviesResponseDto } from "../../MoviesPage/dto/movie.dtos";

export const getAdminMovies = (
  page: number
): Promise<AxiosResponse<MoviesResponseDto>> => {
  return api.get(`movie?page=${page}`);
};

export const deleteMovie = (
  id: MovieDetailsDto
): Promise<AxiosResponse<MovieDetailsDto>> => {
  return api.delete(`/movie/${id}`);
};
