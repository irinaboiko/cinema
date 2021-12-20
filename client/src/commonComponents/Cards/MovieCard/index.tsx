import React, { FC } from "react";
import { IMovie } from "../../../pages/MoviesPage/dto/movie.dtos";
import { Box, Button } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorder from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

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
  const imageUrl =
    process.env.REACT_APP_API_URL && movieInfo.image
      ? `${process.env.REACT_APP_API_URL}/${movieInfo.image}`
      : null;

  const isFavorite = true;
  const isWatchLater = false;

  return (
    <div
      style={{ margin: 10, cursor: "pointer", border: "1px solid #000000" }}
      onClick={() => handleGoToMovieDetailsPage(movieInfo._id)}
    >
      {imageUrl && (
        <img style={{ width: "100px" }} src={imageUrl} alt="movie poster" />
      )}
      <p>{index + 1}</p>
      <p>{movieInfo._id}</p>
      <p>{movieInfo.name}</p>
      <p>{movieInfo.description}</p>
      <Box>
        <Button onClick={(event) => event.stopPropagation()}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
        <Button onClick={(event) => event.stopPropagation()}>
          {isWatchLater ? <BookmarkBorder /> : <BookmarkBorderIcon />}
        </Button>
      </Box>
    </div>
  );
};

export default MovieCard;
