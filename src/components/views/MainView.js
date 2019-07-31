import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import WorldMap from "../main/WorldMap";
import SideBar from "../main/MessageBar";
import BottomBar from "../main/ActionBar";

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
        <div className="left">
          <WorldMap />
          <BottomBar />
        </div>
        <div className="right">
          <SideBar />
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(MainView);

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background: black;

  .left {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  .right {
    height: 100%;
    width: 20%;
    max-width: 200px;
  }
`;
