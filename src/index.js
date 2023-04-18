import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';

import App from "./pages/App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

hot(module)(App);
