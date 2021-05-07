// react and react-components
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
// local components
import { theme } from "./themes/themes";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
