import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import Board from "./components/Board";


const App = () => {
   return (
      <React.Fragment>
         <Board />
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <App />
   </StrictMode>
)