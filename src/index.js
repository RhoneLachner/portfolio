import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log(
  `%cHello, prospective employer!\n\nIf you are reading this, you're probably inspecting my site, and I hope you like what you see!\n\nPlease feel free to reach out to me with any questions at fernandclay@gmail.com.`,
  "font-size:12px; color:lightpink;"
);
