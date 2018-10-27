import React, { Component } from "react";
import "./styles/App.css";
import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
