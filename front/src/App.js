import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import appLogo from "./images/logo.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          <img src={appLogo} alt="Facebook App Logo" height="60" width="60" />
          Facebook
        </Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
