import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./commonComponents/MainLayout";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <div>Cinema</div>
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
