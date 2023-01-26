import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ProSidebarProvider } from "react-pro-sidebar";
import SignUp from "./Index/Sign_up";
import SidebarAccount from "./Dashboard/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route
          path="/Sidebar"
          element={
            <ProSidebarProvider>
              <SidebarAccount />
            </ProSidebarProvider>
          }
        />
        <Route path="/Sign_up" element={<SignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
