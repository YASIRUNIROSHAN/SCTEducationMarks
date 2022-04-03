import React from "react";
import NavBar from "./Components/NavBar";
import DisplayContent from "./Components/DisplayContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewMark from "./Components/ViewMark";
import AddNew from "./Components/AddNew";
import EditMarks from "./Components/EditMarks";
import Test from "./Components/Test";
import Login from "./Components/Login";

const Home = () => {
  return (
    <>
     
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/MarkList">
            <DisplayContent />
          </Route>
          <Route path="/AddNew">
            <AddNew />
          </Route>
          <Route path="/ViewMark/:id">
            <ViewMark />
          </Route>
          <Route path="/EditMarks/:id">
            <EditMarks />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/Test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
