import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import * as urls from '@/api/url.js'
import { Request } from '@/core/request.js'
React.Urls = urls;
React.Request = Request;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
