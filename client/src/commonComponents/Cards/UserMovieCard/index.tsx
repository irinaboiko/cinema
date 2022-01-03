import React, { FC } from "react";
import { IMovie } from "../../../pages/MoviesPage/dto/movie.dtos";

interface UserMovieCardProps {
  movie: IMovie;
}

const UserMovieCard: FC<UserMovieCardProps> = ({ movie }) => {
  const imageUrl =
    process.env.REACT_APP_API_URL && movie.image
      ? `${process.env.REACT_APP_API_URL}/${movie.image}`
      : null;

  return (
    <div
      style={{
        margin: 10,
        padding: 20,
        border: "1px solid #000000",
      }}
    >
      {imageUrl && (
        <img style={{ width: "100px" }} src={imageUrl} alt="movie poster" />
      )}
      <p>{movie._id}</p>
      <p>{movie.name}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default UserMovieCard;
