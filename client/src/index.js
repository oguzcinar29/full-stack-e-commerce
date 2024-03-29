import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { DataProvider } from "./components/Context/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
