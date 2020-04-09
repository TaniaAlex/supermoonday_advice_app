import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { GiMoonClaws } from "react-icons/gi";

export class App extends Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    console.log("component did mount");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((responce) => {
        // destructuring responce data
        const { advice } = responce.data.slip;
        console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    // destructuring
    const { advice } = this.state;
    return (
      <div className="hero">
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              {/* <h3>
                Super{"{Moon"}
                {"}"}Day Advice
              </h3> */}
              <GiMoonClaws className="nav-icon" />
              <h3>SuperMoonDayAdvice</h3>
              {/* <span></span> */}
            </div>
          </div>
        </nav>
        <div className="banner">
          <h1>{advice}</h1>
          <div></div>
          <button className="button" onClick={this.fetchAdvice}>
            <span>I need advice</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
