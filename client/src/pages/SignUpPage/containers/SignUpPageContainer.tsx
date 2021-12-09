import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SignUpPageLayout from "../components/SignUpPageLayout";
import { useForm, useTypedSelector } from "../../../hooks";
import { SignUpDto } from "../dto/signUp.dtos";
import { CLOSE_MODAL, SIGN_UP_REQUEST } from "../actions";
import { ROUTES } from "../../../router/routeNames";

const SignUpPageContainer: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { formValues, handleInputChange } = useForm<SignUpDto>({
    name: "",
    email: "",
    password: "",
  });

  const { isLoading, successMessage, isShowModal, errors } = useTypedSelector(
    (state) => state.signUp
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(SIGN_UP_REQUEST(formValues));
    },
    [dispatch, formValues]
  );

  const handleCloseModal = useCallback(() => {
    dispatch(CLOSE_MODAL());
    navigate(ROUTES.LOGIN);
  }, [dispatch, navigate]);

  return (
    <SignUpPageLayout
      isLoading={isLoading}
      formValues={formValues}
      handleInputChange={handleInputChange}
      successMessage={successMessage}
      isShowModal={isShowModal}
      handleCloseModal={handleCloseModal}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default SignUpPageContainer;
