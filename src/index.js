import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";

ReactDOM.render(
  <React.StrictMode>

    <FirstComponent /> {/*this is how we use a component*/}

    <SecondComponent />

  </React.StrictMode>,
  document.getElementById('root')
);

