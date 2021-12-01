import React, { FC } from "react";
import { IMovie } from "../dto/movie.dtos";
import MovieCard from "../../../commonComponents/Cards/MovieCard";

interface MoviesPageLayoutProps {
  moviesList: IMovie[];
  handleGoToMovieDetailsPage: (id: string) => void;
}

const MoviesPageLayout: FC<MoviesPageLayoutProps> = ({
  moviesList,
  handleGoToMovieDetailsPage,
}) => {
  return (
    <div>
      {moviesList.map((movieInfo, index) => {
        return (
          <MovieCard
            key={movieInfo._id}
            movieInfo={movieInfo}
            index={index}
            handleGoToMovieDetailsPage={handleGoToMovieDetailsPage}
          />
        );
      })}
    </div>
  );
};

export default MoviesPageLayout;
