import { AxiosResponse } from "axios";

import api from "../../../api/config";
import { MovieDetailsDto } from "../../MovieDetailsPage/dto/movieDetails.dtos";
import { MoviesResponseDto } from "../../MoviesPage/dto/movie.dtos";
import { addMovieRequestDto, AddMovieResponseDTO } from "../dto/adminPage.dtos";

export const getAdminMovies = (
  page: number
): Promise<AxiosResponse<MoviesResponseDto>> => {
  return api.get(`movie?page=${page}`);
};

export const addMovie = (
  body: addMovieRequestDto
): Promise<AxiosResponse<AddMovieResponseDTO>> => {
  return api.post("movie", body);
};

export const deleteMovie = (
  id: MovieDetailsDto
): Promise<AxiosResponse<MovieDetailsDto>> => {
  return api.delete(`/movie/${id}`);
};
