import React, { ChangeEvent, FC } from "react";

import { IMovie } from "../dto/movie.dtos";
import MovieCard from "../../../commonComponents/Cards/MovieCard";
import DefaultPagination from "../../../commonComponents/Pagination/DefaultPagination";
import DefaultSpinner from "../../../commonComponents/Spinner/DefaultSpinner";

interface MoviesPageLayoutProps {
  moviesList: IMovie[];
  isLoading: boolean;
  handleGoToMovieDetailsPage: (id: string) => void;
  currentPage: number;
  pagesCount: number;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const MoviesPageLayout: FC<MoviesPageLayoutProps> = ({
  moviesList,
  isLoading,
  handleGoToMovieDetailsPage,
  currentPage,
  pagesCount,
  handlePageChange,
}) => {
  return (
    <>
      {isLoading ? (
        <DefaultSpinner isOpen={isLoading} />
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
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};

export default MoviesPageLayout;
