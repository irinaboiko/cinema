import { Box, Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, FC } from "react";
import AdminMovieCardProps from "../../../commonComponents/Cards/AdminMovieCard/AdminMovieCard";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";
import { Pagination } from "@mui/material";

interface AdminPanelPageLayoutProps {
  moviesList: IMovie[];
  isLoading: boolean;
  handlePageChange: (event: any, page: number) => void;
  currentPage: number;
  pagesCount: number;
  handleDeleteMovie: (id: string) => void;
}

const AdminPanelPageLayout: FC<AdminPanelPageLayoutProps> = ({
  moviesList,
  isLoading,
  handlePageChange,
  currentPage,
  pagesCount,
  handleDeleteMovie,
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
              onClick={() => console.log("ADD NEW MOVIE!!!")}
            >
              Add new movie
            </Button>
            <div>
              <form>
                <Box>
                  <TextField name="name" type="text" placeholder="Name" />
                </Box>
                <Box>
                  <TextField name="image" type="file" />
                </Box>
                <Box>
                  <TextField name="genre" type="text" placeholder="Genre" />
                </Box>
                <Box>
                  <TextField
                    name="description"
                    type="text"
                    placeholder="Description"
                    style={{ width: 500 }}
                    multiline
                    rows={6}
                  />
                </Box>
                <Box>
                  <TextField name="runtime" type="text" placeholder="Runtime" />
                </Box>
                <Box>
                  <TextField
                    name="age_rating"
                    type="text"
                    placeholder="Age Rating"
                  />
                </Box>
                <Box>
                  <TextField
                    name="released"
                    type="text"
                    placeholder="Released"
                  />
                </Box>
                <Box>
                  <TextField name="country" type="text" placeholder="Country" />
                </Box>
              </form>
            </div>

            <div>
              {moviesList.map((movie, index) => {
                return (
                  <AdminMovieCardProps
                    key={movie._id}
                    movie={movie}
                    index={index}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      <Pagination
        page={currentPage}
        count={pagesCount}
        color="secondary"
        onChange={handlePageChange}
      />
    </>
  );
};

export default AdminPanelPageLayout;
