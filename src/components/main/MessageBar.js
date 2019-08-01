import React, { Component } from "react";
import styled from "styled-components";
import { theme1 } from "../../styles/theme";
import ChatWindow from "./ChatWindow";
import { connect } from "react-redux";
import { pushMessage, movePlayer } from "../../actions";

class ActionBar extends Component {
  doMove(event, dir) {
    event.preventDefault();
    console.log({ dir });
    this.props.movePlayer(dir);
  }

  render() {
    return (
      <Bar>
        <div className="details">
          <h3>In Room</h3>
          <div>This will be some payer names</div>
        </div>

        <ChatWindow props={this.props} />

        <div className="actions">
          <div className="top-button">
            <button onClick={event => this.doMove(event, "n")}>N</button>
          </div>
          <div className="mid-button">
            <button onClick={event => this.doMove(event, "w")}>W</button>

            <button onClick={event => this.doMove(event, "e")}>E</button>
          </div>
          <div className="btm-button">
            <button onClick={event => this.doMove(event, "s")}>S</button>
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
  { pushMessage, movePlayer }
)(ActionBar);

const Bar = styled.div`
  background: ${theme1.nightGreen};
  color: ${theme1.silverSand};
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .details {
    padding: 10px;
  }

  .actions {
    background: ${theme1.nightGreen};
    color: ${theme1.silverSand};

    display: flex;
    flex-direction: column;
    text-align: center;

    padding: 25px;

    .mid-button {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
    }

    button {
      transition: 0.4s ease-in;
      background: rgba(0, 0, 0, 0);
      color: ${theme1.silverSand};
      border: 1px solid ${theme1.silverSand};
      border-bottom-width: 4px;
      border-right-width: 4px;

      &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.3);
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
