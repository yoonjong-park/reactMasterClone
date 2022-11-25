import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components"; // Provider : 제공자
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
