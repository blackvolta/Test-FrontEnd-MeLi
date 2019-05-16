import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Link, Route, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Layout/Menu";
import HomePage from "./Pages/HomePage/HomePage";
import ListPage from "./Pages/ListPage/ListPage";
import DetailPage from "./Pages/DetailPage/DetailPage";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={Menu} />
      <Route path="/" exact component={HomePage} />
      <Route path="/items?search=" exact component={ListPage} />
      <Route path="/items/:id" exact component={DetailPage} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
