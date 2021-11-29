import React, { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useForm, useTypedSelector } from "../../../hooks";
import { SignInDto } from "../dto/login.dtos";
import LoginPageLayout from "../components/LoginPageLayout";

import { LOGIN_REQUEST } from "../actions";
import { ROUTES } from "../../../router/routeNames";

const LoginPageContainer: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { formValues, handleInputChange } = useForm<SignInDto>({
    email: "",
    password: "",
  });

  const { isLoading, errors, isAuth } = useTypedSelector((state) => state.auth);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(LOGIN_REQUEST(formValues));
    },
    [dispatch, formValues]
  );

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES.MOVIES);
    }
  }, [navigate, isAuth]);

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
