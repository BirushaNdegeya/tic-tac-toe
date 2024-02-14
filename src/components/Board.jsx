import React from "react";
import Square from "./Square";

const Board = () => {
   return (
      <React.Fragment>
         <div className="container">
            <div className="board-row">
               <Square />
               <Square />
               <Square />
            </div>
            <div className="board-row">
               <Square />
               <Square />
               <Square />
            </div>
            <div className="board-row">
               <Square />
               <Square />
               <Square />
            </div>
         </div>
      </React.Fragment>
   )
};

export default Board;