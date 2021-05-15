import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import "./fonts/webfontkit-20210515-041253/opensans-bold-webfont.woff2";
import "./fonts/webfontkit-20210515-041253/opensans-bold-webfont.woff";
import "./fonts/webfontkit-20210515-041253/opensans-regular-webfont.woff2";
import "./fonts/webfontkit-20210515-041253/opensans-regular-webfont.woff";

ReactDOM.render(
  <React.Fragment>
    <HashRouter>
      <App />
    </HashRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
