import React, { FC } from "react";
import { Pagination } from "@mui/material";

import { IMovie } from "../dto/movie.dtos";
import MovieCard from "../../../commonComponents/Cards/MovieCard";

interface MoviesPageLayoutProps {
  moviesList: IMovie[];
  isLoading: boolean;
  handleGoToMovieDetailsPage: (id: string) => void;
  handlePageChange: (event: any, page: number) => void;
  currentPage: number;
  pagesCount: number;
}

const MoviesPageLayout: FC<MoviesPageLayoutProps> = ({
  moviesList,
  isLoading,
  handleGoToMovieDetailsPage,
  handlePageChange,
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
          <Pagination
            page={currentPage}
            count={pagesCount}
            color="secondary"
            onChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};

export default MoviesPageLayout;
