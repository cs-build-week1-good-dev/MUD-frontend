import React, { Component } from "react";
import styled from "styled-components";
import { theme1 } from "../../styles/theme";
import ChatWindow from "./ChatWindow";
import { connect } from "react-redux";
import { pushMessage } from "../../actions";

class ActionBar extends Component {
  constructor() {
    super();
    this.state = {
      username: "robot124dustinrobo",
      password1: "testpassword35",
      password2: "testpassword35"
    };
  }
  render() {
    return (
      <Bar>
        <div className="Details">
          <h3>Room Details</h3>
          <h4>Room name</h4>
          <p>Issa room with some stuff inna thing and its dope.</p>
        </div>

        <ChatWindow props={this.props} />

        <div className="actions">
          <div className="top-button">
            <button>N</button>
          </div>
          <div className="mid-button">
            <button>W</button>

            {/* <div class="triangle-container">
            <svg>
              <polygon points="250,60 100,400 400,400" class="triangle" />
              Sorry, your browser does not support inline SVG.
            </svg>
          </div> */}

            <button>E</button>
          </div>
          <div className="btm-button">
            <button>S</button>
          </div>
        </div>
      </Bar>
    );
  }
}

const mapStateToProps = state => {
  return {
    pusherReducer: state.pusherReducer.pusherFetch
  };
};

export default connect(
  mapStateToProps,
  { pushMessage }
)(ActionBar);

const Bar = styled.div`
  color: white;
  background: ${theme1.taupe};
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .actions {
    background: ${theme1.lumber};
    color: ${theme1.onyx};

    display: flex;
    flex-direction: column;
    text-align: center;

    padding: 25px;

    .mid-button {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
    }

    .triangle-container {
      text-align: center;
      border: 1px solid white;

      .triangle {
        width: 100px;
        height: 100px;
        fill: darkorange;
        stroke: white;
        stroke-width: 8;
      }
    }

    button {
      transition: 0.4s ease-in;
      background: rgba(0, 0, 0, 0);
      border: none;

      &:hover {
        cursor: pointer;
        color: ${theme1.darkSeaGreen};
        background: rgba(0, 0, 0, 0.05);
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
