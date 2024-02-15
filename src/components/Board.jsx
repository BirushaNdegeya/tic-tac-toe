import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
   const [squares, setSquares] = useState(Array(9).fill(null));

   const handleClick = () => {
      const nextSquare = squares.slice();
      nextSquare[0] = "X";
      setSquares(nextSquare);
   };

   console.log(squares);


   return (
      <React.Fragment>
         <div className="container">
            <div className="board-row">
               <Square value={squares[0]} onSquareClick={handleClick} />
               <Square value={squares[1]} onSquareClick={handleClick} />
               <Square value={squares[2]} onSquareClick={handleClick} />
            </div>
            <div className="board-row">
               <Square value={squares[3]} onSquareClick={handleClick} />
               <Square value={squares[4]} onSquareClick={handleClick} />
               <Square value={squares[5]} onSquareClick={handleClick} />
            </div>
            <div className="board-row">
               <Square value={squares[6]} onSquareClick={handleClick} />
               <Square value={squares[7]} onSquareClick={handleClick} />
               <Square value={squares[8]} onSquareClick={handleClick} />
            </div>
         </div>
      </React.Fragment>
   )
};

export default Board;