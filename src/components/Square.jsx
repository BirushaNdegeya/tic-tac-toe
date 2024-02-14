import React, { useState } from "react";

const Square = ( { value } ) => {
   // const [value, setValue] = useState(null);

   // const handleClick = () => {
   //    setValue("X");
   // }

   return (
      <button 
         className="square">{value}</button>
   );
};

export default Square;