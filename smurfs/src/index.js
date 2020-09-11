import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//redux set up
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./store/reducers/reducer";

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<App />, document.getElementById("root"));
