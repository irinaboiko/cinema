import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  buttonTitle?: string;
}

const BackButton: FC<BackButtonProps> = ({ buttonTitle = "Back" }) => {
  const navigate = useNavigate();

  const handleOnBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={handleOnBackButtonClick}
      style={{ marginBottom: 5 }}
    >
      {buttonTitle}
    </Button>
  );
};

export default BackButton;
