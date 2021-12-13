import React, { FC, useCallback, useEffect, useState } from "react";

import AdminPanelPageLayout from "../components/AdminPanelPageLayout";
import { useForm, useTypedSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import {
  CHANGE_ADMIN_PAGE,
  DELETE_MOVIE_REQUEST,
  GET_ADMIN_MOVIES_REQUEST,
} from "../actions";
import { addMovieRequestDto } from "../dto/adminPage.dtos";

const AdminPanelPageContainer: FC = () => {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);

  const { formValues, handleInputChange } = useForm<addMovieRequestDto>({
    name: "",
    genre: "",
    description: "",
    runtime: "",
    age_rating: "",
    released: "",
    country: "",
  });

  const { moviesList, moviesTotalCount, currentPage, isLoading } =
    useTypedSelector((state) => state.adminPage);

  const pagesCount = Math.ceil(moviesTotalCount / 5);

  const handleDeleteMovie = useCallback(
    (id: string) => {
      //event.preventDefault();
      dispatch(DELETE_MOVIE_REQUEST(id));
    },
    [dispatch]
  );

  const handlePageChange = useCallback(
    (event, page) => {
      if (page !== currentPage) {
        dispatch(CHANGE_ADMIN_PAGE(page));
      }
    },
    [dispatch, currentPage]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      //console.log(formValues);
      console.log(selectedFile);
      //dispatch(LOGIN_REQUEST(formValues));
    },
    [dispatch, formValues, selectedFile]
  );

  useEffect(() => {
    dispatch(GET_ADMIN_MOVIES_REQUEST(currentPage));
  }, [dispatch, currentPage]);

  return (
    <AdminPanelPageLayout
      moviesList={moviesList}
      isLoading={isLoading}
      currentPage={currentPage}
      pagesCount={pagesCount}
      handleDeleteMovie={handleDeleteMovie}
      handlePageChange={handlePageChange}
      formValues={formValues}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      selectedFile={selectedFile}
      setSelectedFile={setSelectedFile}
    />
  );
};

export default AdminPanelPageContainer;
