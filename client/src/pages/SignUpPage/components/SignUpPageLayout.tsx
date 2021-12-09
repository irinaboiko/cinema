import React, { ChangeEvent, FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routeNames";
import { Box, Button, Modal, TextField } from "@material-ui/core";
import { SignUpDto } from "../dto/signUp.dtos";

interface SignUpPageLayoutProps {
  isLoading: boolean;
  formValues: SignUpDto;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  successMessage: string;
  isShowModal: boolean;
  handleCloseModal: () => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errors: string;
}

const SignUpPageLayout: FC<SignUpPageLayoutProps> = ({
  isLoading,
  formValues,
  handleInputChange,
  successMessage,
  isShowModal,
  handleCloseModal,
  handleSubmit,
  errors,
}) => {
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                value={formValues.name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="Name"
              />
            </Box>
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
            <p>Already have an account?</p>
            <Link to={ROUTES.LOGIN}>Log In</Link>
          </Box>
          <Modal
            open={isShowModal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                backgroundColor: "#FFFFFF",
                transform: "translate(-50%, -50%)",
                padding: "20px",
              }}
            >
              <p>Your account was created</p>
              <Link to={ROUTES.LOGIN}>Log In</Link>
            </Box>
          </Modal>
        </Box>
      )}
    </>
  );
};

export default SignUpPageLayout;
