import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  withStyles,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { ReactComponent as AppIcon } from "../images/icon.svg";
import axios from "axios";
import { Link } from "react-router-dom";
const styles = {
  form: {
    textAlign: "center",
  },
  image: {
    margin: "20px auto",
  },
  pageTitle: {
    margin: "10px auto",
  },
  TextField: {
    margin: "10px auto",
  },
  button: {
    marginTop: 20,
    position: "relative",
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
  },
  progress: {
    position: "absolute",
  },
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: {},
    };
  }
  handleSubmit = (event) => {
    this.setState({ loading: true });
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/login", userData)
      .then((res) => {
        this.setState({ loading: false, loggedIn: true });
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("submit4", err);
        this.setState({
          errors: err.response,
          loading: false,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <AppIcon
            height={75}
            width={75}
            fill="indigo"
            className={classes.image}
          />
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>

          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.TextField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              helperText={errors.password}
              error={errors.password ? true : false}
              className={classes.TextField}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              className={classes.button}
            >
              Login
              {loading && (
                <CircularProgress size={20} className={classes.progress} />
              )}
            </Button>

            <br />
            <small>
              don't have an account ? sign up <Link to="/signup">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
