import React, { FC, useCallback } from "react";

import { useForm } from "../../../hooks";
import { SignInDto } from "../dto/login.dtos";
import LoginPageLayout from "../components/LoginPageLayout";
import { useDispatch } from "react-redux";
import { LOGIN_REQUEST } from "../actions";

const LoginPageContainer: FC = () => {
  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm<SignInDto>({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (e) => {
      //dispatch(LOGIN_REQUEST(formValues));
      e.preventDefault();
      console.log(formValues);
    },
    [dispatch, formValues]
  );

  const isAuth = false;
  const isLoading = false;
  const errors = "";

  return (
    <LoginPageLayout
      formValues={formValues}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      errors={errors}
    />
  );
};

export default LoginPageContainer;
