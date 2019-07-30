import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import WorldMap from "../main/WorldMap";
import ActionBar from "../main/ActionBar";

class MainView extends Component {
  render() {
    let isLogged = false;
    if (localStorage.getItem("key")) {
      isLogged = true;
    } else {
      isLogged = false;
    }
    return (
      <Main>
        <WorldMap />
        <ActionBar />
      </Main>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(MainView);

const Main = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
