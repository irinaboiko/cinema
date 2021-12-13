import { Box, Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, FC, FormEvent } from "react";
import { IMovie } from "../../MoviesPage/dto/movie.dtos";
import DefaultPagination from "../../../commonComponents/Pagination/DefaultPagination";
import AdminMovieCard from "../../../commonComponents/Cards/AdminMovieCard/AdminMovieCard";
import { addMovieRequestDto } from "../dto/adminPage.dtos";

interface AdminPanelPageLayoutProps {
  moviesList: IMovie[];
  isLoading: boolean;
  currentPage: number;
  pagesCount: number;
  handleDeleteMovie: (id: string) => void;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
  formValues: addMovieRequestDto;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  selectedFile?: any;
  setSelectedFile?: any;
}

const AdminPanelPageLayout: FC<AdminPanelPageLayoutProps> = ({
  moviesList,
  isLoading,
  currentPage,
  pagesCount,
  handleDeleteMovie,
  handlePageChange,
  formValues,
  handleInputChange,
  handleSubmit,
  selectedFile,
  setSelectedFile,
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
              style={{ marginBottom: "10px" }}
            >
              Add new movie
            </Button>
            <div>
              <form onSubmit={handleSubmit}>
                <Box>
                  <TextField
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box>
                  <TextField
                    name="image"
                    type="file"
                    value={selectedFile}
                    onChange={(event) =>
                      setSelectedFile(
                        (event.target as HTMLInputElement).files[0]
                      )
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    name="genre"
                    type="text"
                    placeholder="Genre"
                    value={formValues.genre}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box>
                  <TextField
                    name="description"
                    type="text"
                    placeholder="Description"
                    style={{ width: 500 }}
                    multiline
                    rows={6}
                    value={formValues.description}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box>
                  <TextField
                    name="runtime"
                    type="text"
                    placeholder="Runtime"
                    value={formValues.runtime}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box>
                  <TextField
                    name="age_rating"
                    type="text"
                    placeholder="Age Rating"
                    value={formValues.age_rating}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box>
                  <TextField
                    name="released"
                    type="text"
                    placeholder="Released"
                    value={formValues.released}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box>
                  <TextField
                    name="country"
                    type="text"
                    placeholder="Country"
                    value={formValues.country}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    Create movie
                  </Button>
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
