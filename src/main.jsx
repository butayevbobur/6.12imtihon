import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalContetextProvider from "./context/useGlobal.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContetextProvider>
    <App />
  </GlobalContetextProvider>
);
