import React from "react";

const Square = ( { value } ) => {

   const handleClick = () => {
      console.log(`Clicked the button number ${value}`);
   }

   return (
      <button 
         className="square"
         onClick={handleClick}>{value}</button>
   );
};

export default Square;