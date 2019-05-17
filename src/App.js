import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Books from "./components/books";
import Details from "./components/details";
import Character from "./components/character";

const mapStateToProps = state => ({
  ...state
});

const App = () => (
  <Router>
    <Route exact path="/" component={Books} />
    <Route path="/details/:isbn" component={Details} />
    <Route path="/characters/:id" component={Character} />
  </Router>
);

export default connect(mapStateToProps)(App);
