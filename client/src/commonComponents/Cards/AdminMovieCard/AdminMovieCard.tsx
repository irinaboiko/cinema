import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { IMovie } from "../../../pages/MoviesPage/dto/movie.dtos";

interface AdminMovieCardProps {
  movie: IMovie;
  index: number;
  handleDeleteMovie: (id: string) => void;
}

const AdminMovieCard: FC<AdminMovieCardProps> = ({
  movie,
  index,
  handleDeleteMovie,
}) => {
  const imageUrl =
    process.env.REACT_APP_API_URL && movie.image
      ? `${process.env.REACT_APP_API_URL}/${movie.image}`
      : null;

  return (
    <div style={{ border: "1px solid black", margin: "10px 0" }}>
      <div>
        <p>{index + 1}</p>
        {imageUrl && (
          <img style={{ width: "100px" }} src={imageUrl} alt="movie poster" />
        )}
        <p>{movie._id}</p>
        <p>{movie.name}</p>
        <p>{movie.description}</p>
      </div>
      <div>
        <Button onClick={() => console.log("EDIT EDIT EDIT")}>Edit</Button>
        <Button onClick={() => handleDeleteMovie(movie._id)}>Delete</Button>
      </div>
    </div>
  );
};

export default AdminMovieCard;
