import "./App.css";
import Board from "./components/Board";
import Options from "./components/Options";
import { colorDefault, letterDefault, wordsDefault } from "./Words";
import React, { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [colorBoard, setColorBoard] = useState(colorDefault);
  const [letters, setLetters] = useState(letterDefault);
  const [words, setWords] = useState(wordsDefault);
  const [numFirstColumn, setNumFirstColumn] = useState(0);

  const onClickSquare = (letterPos, attemptVal) => {
    const newColorBoard = [...colorBoard];
    const currentColor = colorBoard[attemptVal][letterPos];
    const nextColor = currentColor === 0 ? 1 : currentColor === 1 ? 2 : 0;
    newColorBoard[attemptVal][letterPos] = nextColor;
    setColorBoard(newColorBoard)
  }

  const onSelectLetter = (position, e) => {
    const newLetters = [...letters];
    newLetters[position] = e.target.value;
    setLetters(newLetters);
  }

  const onSubmitButton = () => {
    let indices = []
    const newLetters = letters.filter(function(x) {
      return x !== "";
    });

    colorBoard.map(letter => {
      if (letter.includes(2)) {
        let indexes = []
        letter.map((color, index) => {
          if (color === 2) {
            indexes.push(index)
          }
        })
        indices.push(indexes)
      } else if (letter.includes(1)) {
        let indexes = []
        letter.map((color, index) => {
          if (color != 1) {
            indexes.push(index)
          }
        })
        indices.push(indexes)
      }
    })

    function combineArrays( array_of_arrays ){
        if( ! array_of_arrays ){
            return [];
        }

        if( ! Array.isArray( array_of_arrays ) ){
            return [];
        }

        if( array_of_arrays.length == 0 ){
            return [];
        }

        for( let i = 0 ; i < array_of_arrays.length; i++ ){
            if( ! Array.isArray(array_of_arrays[i]) || array_of_arrays[i].length == 0 ){
                return [];
            }
        }

        let odometer = new Array( array_of_arrays.length );
        odometer.fill( 0 ); 

        let output = [];

        let newCombination = formCombination( odometer, array_of_arrays );

        output.push( newCombination );

        while ( odometer_increment( odometer, array_of_arrays ) ){
            newCombination = formCombination( odometer, array_of_arrays );
            output.push( newCombination );
        }

        return output;
    }

    function formCombination( odometer, array_of_arrays ){
        return odometer.reduce(
          function(accumulator, odometer_value, odometer_index){
            return "" + accumulator + array_of_arrays[odometer_index][odometer_value];
          },
          ""
        );
    }

    function odometer_increment( odometer, array_of_arrays ){

        for( let i_odometer_digit = odometer.length-1; i_odometer_digit >=0; i_odometer_digit-- ){ 

            let maxee = array_of_arrays[i_odometer_digit].length - 1;         

            if( odometer[i_odometer_digit] + 1 <= maxee ){
                odometer[i_odometer_digit]++;
                return true;
            }
            else{
                if( i_odometer_digit - 1 < 0 ){
                    return false;
                }
                else{
                    odometer[i_odometer_digit]=0;
                    continue;
                }
            }
        }

    }

    const combinations = combineArrays(indices)

    const charRepeats = function(str) {
        for (let i = 0; i < str.length; i++) {
          if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
            return false;
          }
        }
      return true;
    }

    let possible = []

    combinations.map(combo => {
      if (charRepeats(combo)) {
        possible.push(combo)
      }
    })

    let words = []

    possible.map(order => {
      let word = ""
      for (let i = 0; i < 5; i++) {
        if (order.includes(i)) {
          word += newLetters[order.indexOf(i)]
        } else {
          word += "_"
        }
      }
      words.push(word)
    })

    const numSecondColumn = Math.floor(words.length / 2);
    const numFirstColumn = numSecondColumn + (words.length % 2);

    setNumFirstColumn(numFirstColumn);
    setWords(words);
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
          onClickSquare,
          onSelectLetter, 
          numFirstColumn,
          words
        }}
      >
        <div className="game">
          <Board />
          <div className="button-container">
            <button className="submit" onClick={onSubmitButton}>SUBMIT</button>
          </div>
        </div>
        <Options />
      </AppContext.Provider>
    </div>
  );
}

export default App;
