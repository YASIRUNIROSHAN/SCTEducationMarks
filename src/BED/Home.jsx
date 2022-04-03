import React from "react";
import NavBar from "./Components/NavBar";
import DisplayContent from "./Components/DisplayContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewMark from "./Components/ViewMark";
import AddNew from "./Components/AddNew";
import EditMarks from "./Components/EditMarks";
import Test from "./Components/Test";
import Login from "./Components/Login";
import "../BED/Components/App.css";
import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";

const Home = () => {

  const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const refreshToken = async () => {
      try {
        const res = await axios.post("/auth/refresh", { token: user.refreshToken });
        setUser({
          ...user,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  
    const axiosJWT = axios.create()
  
    axiosJWT.interceptors.request.use(
      async (config) => {
        let currentDate = new Date();
        const decodedToken = jwt_decode(user.accessToken);
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          const data = await refreshToken();
          config.headers["authorization"] = "Bearer " + data.accessToken;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/auth/login", { username, password });
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleDelete = async (id) => {
      setSuccess(false);
      setError(false);
      try {
        await axiosJWT.delete("/auth//users/" + id, {
          headers: { authorization: "Bearer " + user.accessToken },
        });
        setSuccess(true);
      } catch (err) {
        setError(true);
      }
    };

  return (


    <>
    {user ? (
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
    ) : (
      <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <span className="formTitle">Lama Login</span>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submitButton">
            Login
          </button>
        </form>
      </div>
      </div>
    )}
  </>
    // <>
     
      
    // </>
  );
};

export default Home;
