import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import MainPage from "/Users/FW_Digital_Media/Documents/git/computerscience/CS-Build-Week/mud-frontend/src/components/main/MainPage.js";
class MainView extends Component {
  render() {
    let isLogged = false;
    if (localStorage.getItem("key")) {
      isLogged = true;
    } else {
      isLogged = false;
    }
    return (
      <div
        style={{
          background: "black",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <MainPage {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(MainView);
