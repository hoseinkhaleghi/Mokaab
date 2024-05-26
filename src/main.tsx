import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
// import {GlobalState} from "./state/GlobalState";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <GlobalState> */}
      <App />
      {/* </GlobalState> */}
    </BrowserRouter>
  </React.StrictMode>
);
