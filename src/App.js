import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRouter";
import Login from "./components/Login-Register/Login";
import Register from "./components/Login-Register/Register";

export default function(props) {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}
