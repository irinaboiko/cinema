import React, { FC } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { navTabs } from "./navTabs";

import styles from "./styles";

interface IHeaderProps extends WithStyles<typeof styles> {}

/*interface IHeaderProps {
  classes: Record<keyof ReturnType<typeof styles>, string>;
}*/

const Header: FC<IHeaderProps> = ({ classes }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            classes={{
              root: classes.toolbar,
            }}
          >
            {navTabs.map(({ title, path }) => (
              <Button key={path}>
                <Link to={path} className={classes.link}>
                  {title}
                </Link>
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default React.memo(withStyles(styles)(Header));
