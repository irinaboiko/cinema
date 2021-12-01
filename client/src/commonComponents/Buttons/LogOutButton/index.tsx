import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Button, WithStyles, withStyles } from "@material-ui/core";

import styles from "./styles";

interface ILogOutButtonProps extends WithStyles<typeof styles> {}

const LogOutButton: FC<ILogOutButtonProps> = ({ classes }) => {
  const navigate = useNavigate();

  const handleLogOut = useCallback(() => {
    localStorage.clear();
    navigate(0);
  }, [navigate]);

  return (
    <Button
      variant="outlined"
      className={classes.button}
      onClick={handleLogOut}
    >
      <LogoutOutlinedIcon />
    </Button>
  );
};

export default React.memo(withStyles(styles)(LogOutButton));
