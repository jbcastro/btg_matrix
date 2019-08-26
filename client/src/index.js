import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppLogin from "./components/AppLogin";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppLogin />, document.getElementById("root"));
registerServiceWorker();
