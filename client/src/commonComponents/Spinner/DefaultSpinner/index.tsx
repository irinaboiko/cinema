import React, { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

interface DefaultSpinnerProps {
  isOpen: boolean;
}

const DefaultSpinner: FC<DefaultSpinnerProps> = ({ isOpen }) => {
  return (
    <div>
      <Backdrop open={isOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default DefaultSpinner;
