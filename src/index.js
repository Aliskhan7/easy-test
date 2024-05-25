import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ThemesContextProvider } from "./context/themes-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemesContextProvider>
    <App />
  </ThemesContextProvider>,
);
