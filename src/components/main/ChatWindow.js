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
    const pusher = new Pusher(PUSHER_KEY, {
      cluster: "us3",
      forceTLS: true //encrypted??
    });

    const channel = pusher.subscribe(
      "p-channel-705c41bd-74dc-44df-9861-47908d9cedb6"
    ); //props will need to update the room id when a user moves "`p-channel-${channel-id-prop}`"

    //channel is the room you are currently subscribed to

    //below updates this component with latest chat data
    channel.bind("broadcast", data => {
      console.log(data);
      this.setState({
        pusherRoomChatContent: [...this.state.pusherRoomChatContent, data],
        test: ""
      });
    });
  }

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  sendToPusherServer = message => {
    this.props.pushMessage(message).then(this.autoscroll());
    this.setState({ message: "" });
  };
  //attempting to autoscroll
  autoscroll = e => {
    //

    let elements = document.querySelectorAll(".stamp");
    if (elements.length === 0) {
      let scrollable_list = document.querySelector(".scrollable-list");
      scrollable_list.scrollTop = scrollable_list.scrollHeight;
    } else {
      let last_element = elements[elements.length - 1];
      console.log(elements);
      last_element.scrollIntoView();
      console.log("Scrollinto VIEW");
    }

    //
  };

  render() {
    return (
      <StyledChatWindow>
        <MessageList
          className="messageList"
          chatContent={this.state.pusherRoomChatContent}
        />
        <StyledLower>
          <input value={this.state.message} onChange={this.handleChange} />
          <button
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
    uuid: state.player.uuid,
    chatData: state.pusherReducer.data
  };
};

export default connect(
  mapStateToProps,
  { pushMessage }
)(ChatWindow);

const StyledChatWindow = styled.div`
  width: auto;
  box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 1);
  height: 470px;
  padding: 10px;
  margin: 1%;

  .styled-list-container {
    height: 85%;
  }

  input {
    border-radius: 10px;
    border: 1px solid gray;
    height: 10px;
    width: auto;
    padding: 10px 20px;
  }

  button {
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
`;
