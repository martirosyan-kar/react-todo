import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "normalize.css/normalize.css";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import { addToDo } from "./actions/index";

import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addToDo({ text: "Text" }));

console.log(
  store.subscribe(() => {
    console.log(store.getState());
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
