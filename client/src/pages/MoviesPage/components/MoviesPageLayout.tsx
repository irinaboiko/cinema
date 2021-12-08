import React, { FC } from "react";

import { IMovie } from "../dto/movie.dtos";
import MovieCard from "../../../commonComponents/Cards/MovieCard";
import DefaultPagination from "../../../commonComponents/Pagination/DefaultPagination";

interface MoviesPageLayoutProps {
  moviesList: IMovie[];
  isLoading: boolean;
  handleGoToMovieDetailsPage: (id: string) => void;
  currentPage: number;
  pagesCount: number;
}

const MoviesPageLayout: FC<MoviesPageLayoutProps> = ({
  moviesList,
  isLoading,
  handleGoToMovieDetailsPage,
  currentPage,
  pagesCount,
}) => {
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
          <DefaultPagination
            currentPage={currentPage}
            pagesCount={pagesCount}
          />
        </div>
      )}
    </>
  );
};

export default MoviesPageLayout;
