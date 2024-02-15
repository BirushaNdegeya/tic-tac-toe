import React, { useState } from 'react';
import Board from './components/Board';

const Game = () => {
   const [xIsNext, setXIsNext] = useState(true);
   const [history, setHistory] = useState(Array(9).fill(null));
   console.log(history);
   console.log(xIsNext);
   return (
      <div className="game">
         <div className="game-board">
            <Board />
         </div>
         <div className="game-info">
            <ol>
               <li>Holla</li>
            </ol>
         </div>
      </div>
   );
};

export default Game;