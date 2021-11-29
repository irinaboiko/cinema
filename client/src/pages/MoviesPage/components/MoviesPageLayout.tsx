import React, { FC } from "react";
import { IMovie } from "../dto/movie.dtos";
import MovieCard from "../../../commonComponents/Cards/MovieCard";

interface MoviesPageLayoutProps {
  moviesList: IMovie[];
}

const MoviesPageLayout: FC<MoviesPageLayoutProps> = ({ moviesList }) => {
  return (
    <div>
      {moviesList.map((movieInfo, index) => {
        return (
          <MovieCard key={movieInfo._id} movieInfo={movieInfo} index={index} />
        );
      })}
    </div>
  );
};

export default MoviesPageLayout;
