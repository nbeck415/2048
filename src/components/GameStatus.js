import React, { createContext, useState, useEffect } from "react";
import Stopwatch from "./Stopwatch.js";

const startButton = () => {
  return <button className="startButton"></button>;
};

const GameEndStatus = () => {
  return <p>You won!</p>;
};

// props value is whether game is over
const StatusBar = props => {
  const gameEnd = props.gameEnd;
  if (gameEnd) {
    return <GameEndStatus />;
  }
  return <Stopwatch />;
};

//replaces board
const GameEndDisplay = () => {
  return <p> whooo </p>;
};

export { GameEndStatus, StatusBar, GameEndDisplay };
