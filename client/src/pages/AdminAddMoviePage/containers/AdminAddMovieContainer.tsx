import React, { useCallback } from "react";
import AdminAddMovieLayout from "../components/AdminAddMovieLayout";
import { useDispatch } from "react-redux";
import { useForm, useTypedSelector } from "../../../hooks";
import { addMovieRequestDto } from "../../AdminPanelPage/dto/adminPage.dtos";
import { ADD_MOVIE_REQUEST, CLOSE_MODAL } from "../../AdminPanelPage/actions";

const AdminAddMovieContainer = () => {
  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm<addMovieRequestDto>({
    name: "",
    genre: "",
    description: "",
    runtime: "",
    age_rating: "",
    released: "",
    country: "",
  });

  const { isLoading, isShowModal, successMessage } = useTypedSelector(
    (state) => state.adminPage
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      //console.log(selectedFile);
      dispatch(ADD_MOVIE_REQUEST(formValues));
    },
    [dispatch, formValues]
  );

  const handleCloseModal = useCallback(() => {
    dispatch(CLOSE_MODAL());
  }, [dispatch]);

  return (
    <AdminAddMovieLayout
      isLoading={isLoading}
      formValues={formValues}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isShowModal={isShowModal}
      successMessage={successMessage}
      handleCloseModal={handleCloseModal}
    />
  );
};

export default AdminAddMovieContainer;
