import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default AppRouter;
