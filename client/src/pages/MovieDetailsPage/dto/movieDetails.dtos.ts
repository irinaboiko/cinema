import { IMovie } from "../../MoviesPage/dto/movie.dtos";

export interface MovieDetailsDto {
  id: string;
}

export interface MovieDetailsResponseDto {
  movieInfo: IMovie;
}
