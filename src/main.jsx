import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import Game from "./Game";

const App = () => {
   return (
      <React.Fragment>
         <Game />
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <App />
   </StrictMode>
)