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

export enum TabValues {
  isFavorite = "is_favorite",
  isWatchLater = "is_watch_later",
  isWatched = "is_watched",
}
