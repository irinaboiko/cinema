import React, { ChangeEvent, FC, FormEvent } from "react";
import {
  Box,
  Button,
  TextField,
  WithStyles,
  withStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routeNames";
import { SignInDto } from "../dto/login.dtos";

import styles from "./styles";

interface ILoginPageLayoutProps extends WithStyles<typeof styles> {
  formValues: SignInDto;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  errors: string;
}

const LoginPageLayout: FC<ILoginPageLayoutProps> = ({
  classes,
  formValues,
  handleInputChange,
  handleSubmit,
  isLoading,
  errors,
}) => {
  return (
    <>
      {isLoading ? (
        <Box>Loading...</Box>
      ) : (
        <Box className={classes.formWrapper}>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                value={formValues.email}
                onChange={handleInputChange}
                name="email"
                type="email"
                placeholder="Email"
              />
            </Box>
            <Box>
              <TextField
                value={formValues.password}
                onChange={handleInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Box>
            <Box>
              <Button type="submit" variant="outlined" color="primary">
                Sign In
              </Button>
            </Box>
          </form>
          {errors && <div style={{ color: "red" }}>{errors}</div>}
          <Box>
            <p>Don't have an account?</p>
            <Link to={ROUTES.SIGNUP}>Sign Up</Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export default React.memo(withStyles(styles)(LoginPageLayout));
