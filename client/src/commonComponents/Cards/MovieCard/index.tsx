import React, { FC } from "react";
import { IMovie } from "../../../pages/MoviesPage/dto/movie.dtos";

interface MovieCardProps {
  movieInfo: IMovie;
  index: number;
}

const MovieCard: FC<MovieCardProps> = ({ movieInfo, index }) => {
  return (
    <div>
      <p>{index}</p>
      <p>{movieInfo._id}</p>
      <p>{movieInfo.name}</p>
      <p>{movieInfo.description}</p>
    </div>
  );
};

export default MovieCard;
