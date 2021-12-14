export interface addMovieRequestDto {
  name: string;
  image?: string;
  genre: string;
  description: string;
  runtime: string;
  age_rating: string;
  released: string;
  country: string;
}

export interface AddMovieResponseDTO {
  successMessage: string;
}
