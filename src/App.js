import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/home/home.component.jsx";

function App() {
  return (
    <Router>
      <Switch>
            <Route path="/">
              <Home/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
