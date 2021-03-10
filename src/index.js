import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
//import AuthProvider from "./context/AuthContext";
import ListProvider from "./context/listContext.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ListProvider>
        <App />
      </ListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
