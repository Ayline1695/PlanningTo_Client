import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import ListProvider from "./context/listContext.js";
import TaskProvider from "./context/TaskContext";
import ProjectProvider from "./context/ProjectContext";
// se pueden montar unos sobre otros sin dar problemas

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <ListProvider>
            <TaskProvider>
              <App />
            </TaskProvider>
          </ListProvider>
        </ProjectProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
