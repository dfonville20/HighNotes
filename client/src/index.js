import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import ButtonContainer, { MapContainer } from "./pages/welcome";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <MapContainer />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
