import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SignUpPageLayout from "../components/SignUpPageLayout";
import { useForm, useTypedSelector } from "../../../hooks";
import { SignUpDto } from "../dto/signUp.dtos";
import { SIGN_UP_REQUEST } from "../actions";

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

  return <SignUpPageLayout />;
};

export default SignUpPageContainer;
