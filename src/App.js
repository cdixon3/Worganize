import "./App.css";
import Board from "./components/Board";
import { colorDefault } from "./Words";
import React, { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [colorBoard, setColorBoard] = useState(colorDefault);

  const onClickSquare = (letterPos, attemptVal) => {
    const newColorBoard = [...colorBoard];
    const currentColor = colorBoard[attemptVal][letterPos];
    const nextColor = currentColor === 0 ? 1 : currentColor === 1 ? 2 : 0;
    newColorBoard[attemptVal][letterPos] = nextColor;
    setColorBoard(newColorBoard)
  }

  return (
    <div className="App">
      <nav>
        <h1>Worganize</h1>
      </nav>
      <AppContext.Provider
        value={{
          colorBoard,
          setColorBoard,
          onClickSquare
        }}
      >
        <div className="game">
          <Board />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
