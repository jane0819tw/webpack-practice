import { hot } from 'react-hot-loader/root';
import React from "react";
import ReactDOM from "react-dom";
import CustomRoute from "@/routers";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <CustomRoute />,
  rootElement
);

