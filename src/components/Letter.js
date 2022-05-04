import React, { useContext } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { colorBoard, onClickSquare } =
    useContext(AppContext);

  const color = colorBoard[attemptVal][letterPos];
  const letterState = color === 0 ? "error" : color === 1 ? "almost" : "correct";

  return (
    <div className="letter" id={letterState} onClick={() => onClickSquare(letterPos, attemptVal)}/>
  );
}

export default Letter;
