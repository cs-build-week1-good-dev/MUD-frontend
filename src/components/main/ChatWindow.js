import React, { Component } from "react";
import styled from "styled-components";
import Pusher from "pusher-js";
import { connect } from "react-redux";
import { pushMessage } from "../../actions";
import { MessageList } from "./MessageList";
import { PUSHER_KEY } from "../../config";
import { theme1 } from "../../styles/theme";

export class ChatWindow extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      pusherRoomChatContent: []
    };
  }

  componentDidMount() {
    this.setEnterKeyListener();
  }

  setEnterKeyListener() {
    var input = document.querySelector(".chat-input");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".send-chat-btn").click();
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.uuid !== this.props.uuid) {
      const pusher = new Pusher(PUSHER_KEY, {
        cluster: "us3",
        forceTLS: true //encrypted??
      });

      const channel = pusher.subscribe(`p-channel-${this.props.uuid}`);
      //channel is your personal player channel from pusher.  Messages are broadcasted to player channels that share a current room.
      console.log({ channel });

      //below updates this component with latest chat data
      channel.bind("broadcast", data => {
        console.log({ data });
        this.setState({
          pusherRoomChatContent: [...this.state.pusherRoomChatContent, data],
          test: ""
        });
      });
    }

    //check if new x,y coord, if both true clear chat data
    if (
      prevProps.x_coord !== this.props.x_coord ||
      prevProps.y_coord !== this.props.y_coord
    ) {
      console.log("They are differet!");
      this.setState({
        pusherRoomChatContent: [],
        message: ""
      });
    }
  }

  handleChange = e => {
    this.setState({
      message: e.target.value.substring(4, e.target.value.length)
    });
  };

  sendToPusherServer = message => {
    console.log("PROPPPS", this.props);
    this.props
      .pushMessage(message)
      .then(console.log)
      .catch(console.log);
    // this.props.pushMessage(message).then(this.autoscroll())
    this.setState({ message: "" });
  };

  render() {
    return (
      <StyledChatWindow>
        <MessageList
          className="messageList"
          chatContent={this.state.pusherRoomChatContent}
        />
        <StyledLower>
          <input
            className="chat-input"
            value={">>> " + this.state.message}
            onChange={this.handleChange}
          />
          <button
            className="send-chat-btn"
            onClick={() => {
              this.sendToPusherServer(
                JSON.stringify({ message: this.state.message })
              );
            }}
          >
            Send
          </button>
        </StyledLower>
      </StyledChatWindow>
    );
  }
}

const mapStateToProps = state => {
  return {
    pushStart: state.pusherReducer.pusherFetch,
    pushSuccess: state.pusherReducer.pusherSuccess,
    pushFailure: state.pusherReducer.pusherFailure,
    chatData: state.pusherReducer.data,
    uuid: state.player.uuid,
    x_coord: state.player.x_coordinate,
    y_coord: state.player.y_coordinate
  };
};

export default connect(
  mapStateToProps,
  { pushMessage }
)(ChatWindow);

const StyledChatWindow = styled.div`
  width: auto;
  ${"" /* box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 1); */}
  height: 45vh;
  padding: 10px;

  .styled-list-container {
    height: 85%;
  }

  input {
    background: ${theme1.nightGreen};
    color: ${theme1.silverSand};
    border-radius: 0px;
    /* border: 1px solid ${theme1.silverSand}; */
    border: none;
    border-bottom: 1px solid ${theme1.silverSand};
    width: auto;
    padding: 10px 5px 0 5px;

    font-size: 2rem;
  }

  button {
    visibility:hidden;
    border-radius: 10px;
    padding: 10px;
    margin: 0px 5px;
    background: ${theme1.taupe};
    transition: 0.2s ease-in;
    border: none;
    &:hover {
      cursor: pointer;
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.9);
    }
  }
`;

const StyledLower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
