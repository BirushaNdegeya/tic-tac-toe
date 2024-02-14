import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import Square from "./components/Square";


const App = () => {
   return (
      <React.Fragment>
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);