import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/now-ui-kit.css";
import "./index.css";
import Index from "./views/Index.js";
import Validator from "./views/ValidatorPage.js";
import People from "./views/PeoplePage.js";
import ProfilePage from "./views/ProfilePage.js";
import ContactPage from "./views/ContactPage.js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/validator-page"
          render={props => <Validator {...props} />}
        />
        <Route path="/people-page" render={props => <People {...props} />} />
        <Route path="/contact-page/:id" render={props => <ContactPage {...props} />} />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
