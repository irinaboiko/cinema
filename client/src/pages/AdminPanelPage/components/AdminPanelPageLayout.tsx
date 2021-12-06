import { Box, Button, TextField } from "@material-ui/core";
import React, { FC } from "react";
import AdminMovieCardProps from "../../../commonComponents/Cards/AdminMovieCard/AdminMovieCardProps";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";

interface AdminPanelPageLayoutProps {
  moviesList: IMovie[];
  isLoading: boolean;
  handleDeleteMovie: (id: string) => void;
}

const AdminPanelPageLayout: FC<AdminPanelPageLayoutProps> = ({
  moviesList,
  isLoading,
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
              {moviesList.map((movie) => {
                return (
                  <AdminMovieCardProps
                    key={movie._id}
                    movie={movie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanelPageLayout;
