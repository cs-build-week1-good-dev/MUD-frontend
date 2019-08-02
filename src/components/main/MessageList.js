import React, { Component } from "react";
import styled from "styled-components";

export class MessageList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chatContent !== this.props.chatContent) {
      
      const messages = document.querySelectorAll(".text-block-cont")
      if (messages.length ===0){
        return
      }
      console.log(messages)
      const most_recent = messages[messages.length -1]
      document.getElementById('scrollable-list').scrollTop = most_recent.offsetHeight + most_recent.offsetTop;
      };
  
}

  render() {
    return (
      <div className="styled-list-container">
        <StyledList onClick={this.autoscroll} id="scrollable-list" className="scrollable-list">
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
  overflow-y: auto;

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
    background:#02fd026b;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    border: 1px solid #BFD3C187;
    border-radius: 10px 10px 0px 10px;
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
    font-size:1.2rem;
  }
  .stamp {
    margin: 10px;
    color: lightgray;
    font-size:1.2rem;
  }

  .username {
    padding: 5px;
    font-weight: 600;
    font-size:1.2rem;
  }
`;
