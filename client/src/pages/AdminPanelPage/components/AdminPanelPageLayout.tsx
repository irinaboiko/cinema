import { Box, Button, TextField } from "@material-ui/core";
import React, { FC } from "react";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";
import DefaultPagination from "../../../commonComponents/Pagination/DefaultPagination";
import AdminMovieCard from "../../../commonComponents/Cards/AdminMovieCard/AdminMovieCard";

interface AdminPanelPageLayoutProps {
  moviesList: IMovie[];
  isLoading: boolean;
  currentPage: number;
  pagesCount: number;
  handleDeleteMovie: (id: string) => void;
}

const AdminPanelPageLayout: FC<AdminPanelPageLayoutProps> = ({
  moviesList,
  isLoading,
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
        </div>
      )}

      <DefaultPagination currentPage={currentPage} pagesCount={pagesCount} />
    </>
  );
};

export default AdminPanelPageLayout;
