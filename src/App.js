import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const theme = createTheme({
  palette: {
    primary: {
      light: "#3374dc",
      main: "#0051d4",
      dark: "#003994",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffc933",
      main: "#ffbb00",
      dark: "#b28300",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          App
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
