import React, { useCallback } from "react";
import AdminAddMovieLayout from "../components/AdminAddMovieLayout";
import { useDispatch } from "react-redux";
import { useForm, useTypedSelector } from "../../../hooks";
import { addMovieRequestDto } from "../../AdminPanelPage/dto/adminPage.dtos";
import { ADD_MOVIE_REQUEST, CLOSE_MODAL } from "../actions";

const AdminAddMovieContainer = () => {
  const dispatch = useDispatch();

  const { formValues, setFormValues, handleInputChange } =
    useForm<addMovieRequestDto>({
      name: "",
      genre: "",
      description: "",
      runtime: "",
      age_rating: "",
      released: "",
      country: "",
    });

  const { isLoading, isShowModal, successMessage } = useTypedSelector(
    (state) => state.adminAddMoviePage
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      //console.log(selectedFile);
      dispatch(ADD_MOVIE_REQUEST(formValues));
      setFormValues({
        name: "",
        genre: "",
        description: "",
        runtime: "",
        age_rating: "",
        released: "",
        country: "",
      });
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
