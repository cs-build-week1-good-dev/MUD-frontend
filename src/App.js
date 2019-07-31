import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRouter";
import Login from "./components/Login-Register/Login";
import Register from "./components/Login-Register/Register";
import MainView from "./components/views/MainView";

export default function(props) {
  return (
    <div className="App" style={{ background: "black" }}>
      <Route
        exact
        path="/"
        render={props => <Redirect {...props} to="/login" />}
      />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/adv" component={MainView} />
    </div>
  );
}
