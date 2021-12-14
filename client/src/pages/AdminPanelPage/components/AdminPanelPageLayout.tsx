import { Button } from "@material-ui/core";
import React, { ChangeEvent, FC } from "react";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";
import DefaultPagination from "../../../commonComponents/Pagination/DefaultPagination";
import AdminMovieCard from "../../../commonComponents/Cards/AdminMovieCard/AdminMovieCard";
import { ROUTES } from "../../../router/routeNames";
import { Link } from "react-router-dom";

interface AdminPanelPageLayoutProps {
  moviesList: IMovie[];
  isLoading: boolean;
  currentPage: number;
  pagesCount: number;
  handleDeleteMovie: (id: string) => void;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
  //selectedFile: any;
  //setSelectedFile: (event: ChangeEvent<HTMLInputElement>) => void;
  //handleFileInputChange: any;
}

const AdminPanelPageLayout: FC<AdminPanelPageLayoutProps> = ({
  moviesList,
  isLoading,
  currentPage,
  pagesCount,
  handleDeleteMovie,
  handlePageChange,
  //selectedFile,
  //setSelectedFile,
  //handleFileInputChange,
}) => {
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ padding: 20 }}>
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={(event) => event.preventDefault()}
              style={{ marginBottom: "10px" }}
            >
              <Link
                style={{ textDecoration: "none" }}
                to={ROUTES.ADMIN_ADD_MOVIE}
              >
                Add new movie
              </Link>
            </Button>

            <div>
              {moviesList.map((movie, index) => {
                return (
                  <AdminMovieCard
                    key={movie._id}
                    movie={movie}
                    index={index}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                );
              })}
            </div>
          </div>
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

export default AdminPanelPageLayout;
