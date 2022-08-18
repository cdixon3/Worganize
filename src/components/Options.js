import React, { useContext } from "react";
import { AppContext } from "../App";

function Options() {
    const { words, numFirstColumn, numSecondColumn } = useContext(AppContext);

//   const letter = words[attemptVal][letterPos] !== "_" ? words[attemptVal][letterPos] : "";

//   return (
//     <div className="letter">
//       {letter}
//     </div>
//   );

    const gridTemplateRows = '1fr '.repeat(numFirstColumn);
    const firstColumnRows = []
    const secondColumnRows = []

    console.log(words)
    console.log(numFirstColumn)
    console.log(numSecondColumn)
    
    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            const word = words[i]
            const row = []
            for (let j = 0; j < 5; j++) {
                const letter = word[j] !== "_" ? word[j] : "";

                row.push(
                    <div className="letter">
                        {letter}
                    </div>
                );
            }
            firstColumnRows.push(
                <div className="option">
                    {row}
                </div>
            )
        } else {
            const word = words[i]
            const row = []
            for (let j = 0; j < 5; j++) {
                const letter = word[j] !== "_" ? word[j] : "";

                row.push(
                    <div className="letter">
                        {letter}
                    </div>
                );
            }
            secondColumnRows.push(
                <div className="option">
                    {row}
                </div>
            )
        }
    }

    console.log(firstColumnRows)
    console.log(secondColumnRows)

    return (
        <div className="options-container">
            <div className="columns" style={{width: 1000, height: 350}}>
                <div className="options" style={{width: 350, height: numFirstColumn * 70, display: "grid", gridTemplateRows: gridTemplateRows, gridGap: '5px', padding: '10px', boxSizing: "border-box"}}>
                    {firstColumnRows}
                </div>
                <div className="options" style={{width: 350, height: numFirstColumn * 70, display: "grid", gridTemplateRows: gridTemplateRows, gridGap: '5px', padding: '10px', boxSizing: "border-box"}}>
                    {secondColumnRows}
                </div>
            </div>
        </div>  
    )

}

export default Options;