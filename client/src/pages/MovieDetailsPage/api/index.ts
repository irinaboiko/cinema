import { AxiosResponse } from "axios";
import api from "../../../api/config";

import {
  MovieDetailsDto,
  MovieDetailsResponseDto,
} from "../dto/movieDetails.dtos";

export const getMovieDetails = (
  id: MovieDetailsDto
): Promise<AxiosResponse<MovieDetailsResponseDto>> => {
  return api.get(`/movie/${id}`);
};
