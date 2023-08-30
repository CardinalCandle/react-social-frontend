import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

export class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
