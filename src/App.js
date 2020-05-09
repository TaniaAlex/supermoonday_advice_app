import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { GiMoonClaws } from "react-icons/gi";

export class App extends Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((responce) => {
        const { advice } = responce.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="hero">
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <GiMoonClaws className="nav-icon" />
              <h3>SuperMoonDayAdvice</h3>
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
