import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./pages/home/home.component.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";


library.add(
  faFacebook,
  faLinkedinIn,
  faInstagram,
  faStar
);

function App() {
  return (
    <Router>
      <Route path="/">
        <Home/>
      </Route>
      <Redirect to='/'/>
    </Router>
  );
}

export default App;
