import React from "react";
import { AppBar, Avatar, Typography, Button, Toolbar } from "@material-ui/core";
import appLogo from "../../images/logo.png";
import useStyles from "./style";
import { Link } from "react-router-dom";
function Navbar() {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div>
        <Typography
          className={classes.heading}
          component={Link}
          to="/"
          variant="h2"
        >
          <img
            className={classes.image}
            src="https://image.flaticon.com/icons/png/512/2489/2489014.png"
            alt="Facebook App Logo"
            height="60"
            width="60"
          />
          <span> Club House</span>
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              src={user.result.imageUrl}
            ></Avatar>
            <Typography className={classes.userName} varient="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.logout}
              varient="contained"
              color="secondary"
            >
              Log Out
            </Button>
          </div>
        ) : (
          <Button
            className={classes.login}
            component={Link}
            to="/auth"
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
