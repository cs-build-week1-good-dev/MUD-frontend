import React, { Component } from "react";
import styled from "styled-components";

export class MessageList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="styled-list-container">
        <StyledList onClick={this.autoscroll} className="scrollable-list">
          {this.props.chatContent.length === 0 && <li>No Chat History</li>}
          {this.props.chatContent.length > 0 &&
            this.props.chatContent.map(element => (
              <div className="text-block-cont">
                <span className="username">{element.name}</span>
                <div className="message-bub">{element.message}</div>
                <div className="stamp">{element.time}</div>
              </div>
            ))}
        </StyledList>
      </div>
    );
  }
}

const StyledList = styled.div`
  height: 100%;

  display: flex;

  flex-direction: column;

  justify-content: flex-start;
  font-size: 10px;
  overflow-y: scroll;

  -ms-overflow-style: none; // IE 10+
  scrollbar-width: none; // Firefox

  &::-webkit-scrollbar {
    display: none; // Safari and Chrome
  }

  .text-block-cont {
    margin: 10px;
    margin: 10px;

    display: flex;

    justify-content: space-between;

    flex-direction: column;
  }
  .message-bub {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0px 5px;
    text-align: left;
    overflow-wrap: break-word;
    word-wrap: break-word;

    -ms-word-break: break-all;
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all;
    /* Instead use this non-standard one: */
    word-break: break-word;

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
  .stamp {
    margin: 10px;
    color: lightgray;
  }

  .username {
    padding: 5px;
    font-weight: 600;
  }
`;
