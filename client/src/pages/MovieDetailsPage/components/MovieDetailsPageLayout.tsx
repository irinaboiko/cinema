import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";

interface MovieDetailsPageLayoutProps {
  movieInfo: IMovie;
  isLoading: boolean;
  handleOnBackButtonClick: () => void;
}

const MovieDetailsPageLayout: FC<MovieDetailsPageLayoutProps> = ({
  movieInfo,
  isLoading,
  handleOnBackButtonClick,
}) => {
  const imageUrl =
    process.env.REACT_APP_API_URL && movieInfo.image
      ? `${process.env.REACT_APP_API_URL}/${movieInfo.image}`
      : null;

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ padding: 20 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleOnBackButtonClick}
            style={{ marginBottom: 5 }}
          >
            Back
          </Button>
          {imageUrl && (
            <div>
              <img
                style={{ width: "250px" }}
                src={imageUrl}
                alt="movie poster"
              />
            </div>
          )}
          <h1>{movieInfo.name}</h1>
          <p>{movieInfo._id}</p>
          <p>{movieInfo.description}</p>
          <p>{movieInfo.genre}</p>
          <p>{movieInfo.runtime}</p>
          <p>{movieInfo.age_rating}</p>
          <p>{movieInfo.released}</p>
          <p>{movieInfo.country}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPageLayout;
