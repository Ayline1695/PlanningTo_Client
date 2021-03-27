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
import ErrorBoundary from "./components/ErrorBounday/ErrorBounday";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <AuthProvider>
          <ProjectProvider>
            <ListProvider>
              <TaskProvider>
                <App />
              </TaskProvider>
            </ListProvider>
          </ProjectProvider>
        </AuthProvider>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
