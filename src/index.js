/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import "assets/css/sugar.css";
import "assets/css/nucleo-icons.css";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Strategy from "views/examples/Strategy.js";
import Contact from "views/examples/contact.js";
import GMT from "views/examples/Gmt.js";
import Devlopment from "views/examples/development";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Landing {...props} />} />
      <Route path="/Consultation" exact render={(props) => <Strategy {...props} />} />
      <Route path="/Development" exact render={(props) => <Devlopment {...props} />} />
      <Route path="/GTM-Strategy" exact render={(props) => <GMT {...props} />} />
      <Route path="/Contact" exact render={(props) => <Contact {...props} />} />

      {/* <Route path="/Strategy" exact render={(props) => <Strategy {...props} />} /> */}

      <Route path="/login-page" exact render={(props) => <Login {...props} />}/>
      <Route path="/profile-page" exact render={(props) => <Profile {...props} />} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
