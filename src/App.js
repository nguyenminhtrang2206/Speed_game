import "./App.css";
import Circle from "./Circle";
import React, { Component } from "react";
import { circles } from "./circles";
import GameOver from "./GameOver";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  //inside the class component, we dont need const/let
  state = {
    score: 0,
    current: 0,
    gameOver: false,
  };

  time = undefined;
  pace = 1500;

  clickHandler = () => {
    this.setState({ score: this.state.score + 10 });
  };

  nextCircle = () => {
    let nextActive;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("active circle is", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
  };

  stopHandler = () => {
    clearTimeout(this.timer);

    this.setState({
      gameOver: true,
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.gameOver && <GameOver score={this.state.score} />}
        <header>Speed Game</header>
        <h1>Your score: {this.state.score}</h1>
        <div className="circles">
          {circles.map((c) => (
            <Circle
              key={c.id}
              color={c.color}
              id={c.id}
              click={this.clickHandler}
              active={this.state.current === c.id}
              score={this.state.score}
            />
          ))}
        </div>

        <div className="buttons">
          <button onClick={this.startHandler}>Start</button>
          <button onClick={this.stopHandler}>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;
