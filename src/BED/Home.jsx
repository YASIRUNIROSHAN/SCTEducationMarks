import React from "react";
import NavBar from "./Components/NavBar";
import DisplayContent from "./Components/DisplayContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewMark from "./Components/ViewMark";
import AddNew from "./Components/AddNew";

const Home = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <DisplayContent />
          </Route>
          <Route path="/AddNew">
            <AddNew />
          </Route>
          <Route path="/ViewMark/:id">
            <ViewMark />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
