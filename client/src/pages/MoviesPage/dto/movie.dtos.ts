export interface IMovie {
  _id: string;
  name: string;
  image?: string;
  genre: string;
  description: string;
  runtime: string;
  age_rating: string;
  released: string;
  country: string;
}

export interface MoviesResponseDto {
  movies: IMovie[];
}
