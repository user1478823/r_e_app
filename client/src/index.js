import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";
import Navbar from "./components/Navbar";
import CreateComponent from "./components/CreateComponent";
import EditComponent from "./components/EditComponent";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <main>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/create" component={CreateComponent} />
        <Route exact path="/edit/:id" component={EditComponent} />
      </Switch>
    </BrowserRouter>
  </main>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
