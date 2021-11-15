import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Game Over</h1>
        <p>Your score was: {props.score}</p>
        <button className="close" onClick={closeHandler}>
          x
        </button>
      </div>
    </div>
  );
};

export default GameOver;
