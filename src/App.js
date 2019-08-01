import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ChatWindow from "../src/components/main/ChatWindow";
import { pushMessage } from "../src/actions";
import PrivateRoute from "./components/PrivateRouter";
import Login from "./components/Login-Register/Login";
import Register from "./components/Login-Register/Register";
import MainView from "./components/views/MainView";
import styled from "styled-components";
import { theme1 } from "./styles/theme.js";

function App({ props }) {
  return (
    <StyledApp className="App">
      <Route
        exact
        path="/"
        render={props => <Redirect {...props} to="/login" />}
      />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/adv" component={MainView} />
    </StyledApp>
  );
}

function mapStateToProps(state) {
  return {
    pusherReducer: state.pusherReducer.pusherFetch
  };
}

export default connect(
  mapStateToProps,
  { pushMessage }
)(App);

const StyledApp = styled.div`
  background: ${theme1.onyx};
`;
