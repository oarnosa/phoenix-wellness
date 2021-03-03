import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./pages/home/home.component.jsx";
import Mission from "./pages/mission/mission.component.jsx";
import Plans from "./pages/plans/plans.component.jsx";
import Testimonials from "./pages/testimonials/testimonials.component.jsx";
import Contact from "./pages/contact/contact.component.jsx";

function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/mission">
              <Mission/>
            </Route>
            <Route path="/plans">
              <Plans/>
            </Route>
            <Route path="/testimonials">
              <Testimonials/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    </Router>
  );
}

export default App;
