import React from "react";
import ImageLayout from "./ImageLayout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Aunthentication/Navigation";
import LoginPage from "./Aunthentication/LoginPage";
import LoginPage2 from "./Aunthentication/LoginPage2";

function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <Route path="/Instructor" component={LoginPage} />
        <Route path="/Student" component={LoginPage2} />
        <Route path="/ImageLayout" component={ImageLayout} />
      </div>
    </Router>
  );
}

export default App;
