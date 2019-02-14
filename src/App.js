import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="john Doe" email="jdoe@gmail.com" phone="555-555-555" />
          <Contact
            name="karan smith"
            email="ksmith@gmail.com"
            phone="555-666-555"
          />
        </div>
      </div>
    );
  }
}

export default App;

//4 started
