import React, { FC } from "react";
import { IMovie } from "../../../pages/MoviesPage/dto/movie.dtos";

interface MovieCardProps {
  movieInfo: IMovie;
  index: number;
  handleGoToMovieDetailsPage: (id: string) => void;
}

const MovieCard: FC<MovieCardProps> = ({
  movieInfo,
  index,
  handleGoToMovieDetailsPage,
}) => {
  const imageUrl = movieInfo.image
    ? `${process.env.REACT_APP_API_URL}${movieInfo.image}`
    : null;

  return (
    <div
      style={{ margin: 10, cursor: "pointer", border: "1px solid #000000" }}
      onClick={() => handleGoToMovieDetailsPage(movieInfo._id)}
    >
      {imageUrl && (
        <img
          style={{ width: "100px" }}
          src={`${process.env.REACT_APP_API_URL}${movieInfo.image}`}
          alt="movie poster"
        />
      )}
      <p>{index + 1}</p>
      <p>{movieInfo._id}</p>
      <p>{movieInfo.name}</p>
      <p>{movieInfo.description}</p>
    </div>
  );
};

export default MovieCard;
