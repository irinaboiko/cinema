import { IMovie } from "../../MoviesPage/dto/movie.dtos";

export interface UserDto {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface getUserMoviesCollectionRequestDto {
  userId: string;
  option: string;
}

export interface UserMoviesCollectionResponseDto {
  moviesCollection: IMovie[];
}
