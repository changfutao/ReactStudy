import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./01_类组件和函数组件/App_class";
// import App from "./01_类组件和函数组件/App_func";
import App from "./02_组件的生命周期函数/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
