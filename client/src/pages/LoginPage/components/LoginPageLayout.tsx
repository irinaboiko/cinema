import React, { FC } from "react";
import { Box, Button, TextField } from "@material-ui/core";

const LoginPageLayout: FC = () => {
  return (
    <Box>
      <form>
        <TextField name="email" type="email" placeholder="Email" />
        <TextField name="password" type="password" placeholder="Password" />
        <Button variant="outlined" color="primary">
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default LoginPageLayout;
