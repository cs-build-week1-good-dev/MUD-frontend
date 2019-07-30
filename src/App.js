import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRouter";
import Login from "./components/Login-Register/Login";
import Register from "./components/Login-Register/Register";
import MainView from "./components/views/MainView";

export default function(props) {
  return (
    <div className="App" style={{ background: "black" }}>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/adv" component={MainView} />
    </div>
  );
}
