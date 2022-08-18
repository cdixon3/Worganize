import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";
import Dropdown from "./Dropdown";

function Board() {
  const { onClickSquare } =
    useContext(AppContext);
  return (
    <div className="board-container">
      <div className="board" style={{width: 490, height: 350}}>
        {" "}
        <div className="row">
          <Dropdown position={0}/>
          <div></div>
          <Letter letterPos={0} attemptVal={0} />
          <Letter letterPos={1} attemptVal={0} />
          <Letter letterPos={2} attemptVal={0} />
          <Letter letterPos={3} attemptVal={0} />
          <Letter letterPos={4} attemptVal={0} />
        </div>
        <div className="row">
          <Dropdown position={1}/>
          <div></div>
          <Letter letterPos={0} attemptVal={1} />
          <Letter letterPos={1} attemptVal={1} />
          <Letter letterPos={2} attemptVal={1} />
          <Letter letterPos={3} attemptVal={1} />
          <Letter letterPos={4} attemptVal={1} />
        </div>
        <div className="row">
          <Dropdown position={2}/>
          <div></div>
          <Letter letterPos={0} attemptVal={2} />
          <Letter letterPos={1} attemptVal={2} />
          <Letter letterPos={2} attemptVal={2} />
          <Letter letterPos={3} attemptVal={2} />
          <Letter letterPos={4} attemptVal={2} />
        </div>
        <div className="row">
          <Dropdown position={3}/>
          <div></div>
          <Letter letterPos={0} attemptVal={3} />
          <Letter letterPos={1} attemptVal={3} />
          <Letter letterPos={2} attemptVal={3} />
          <Letter letterPos={3} attemptVal={3} />
          <Letter letterPos={4} attemptVal={3} />
        </div>
        <div className="row">
          <Dropdown position={4}/>
          <div></div>
          <Letter letterPos={0} attemptVal={4} />
          <Letter letterPos={1} attemptVal={4} />
          <Letter letterPos={2} attemptVal={4} />
          <Letter letterPos={3} attemptVal={4} />
          <Letter letterPos={4} attemptVal={4} />
        </div>
      </div>
    </div>
  );
}

export default Board;
