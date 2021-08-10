import React from 'react';
import ReactDOM from 'react-dom';
//import FirstComponent from "./firstComponent";
//import SecondComponent from "./secondComponent";
//import NestedComponent from "./NestedComponent";
import Index from "./index";
import Bookstore from "./Bookstore";

ReactDOM.render(
  <React.StrictMode>
    <Bookstore />

  </React.StrictMode>,
  document.getElementById('root')
);

