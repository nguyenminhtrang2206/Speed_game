import "./App.css";
import Circle from "./Circle";
import React, { Component } from "react";
import { circles } from "./circles";

class App extends Component {
  state = {
    score: 0,
  };

  clickHandler = () => {
    this.setState({ score: this.state.score + 10 });
  };

  render() {
    return (
      <div className="app">
        <header>Speed Game</header>
        <h1>Your score: {this.state.score}</h1>
        <div className="circles">
          {circles.map((c) => (
            <Circle
              key={c.id}
              color={c.color}
              id={c.id}
              click={this.clickHandler}
            />
          ))}
        </div>

        <div className="buttons">
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;
