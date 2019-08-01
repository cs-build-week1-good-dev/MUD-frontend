import React, { Component } from "react";
import styled from "styled-components";
import Pusher from "pusher-js";
import { connect } from "react-redux";
import { pushMessage } from "../../actions";
import { MessageList } from "./MessageList";
import { PUSHER_KEY } from "../../config";

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
      </StyledChatWindow>
    );
  }
}

const mapStateToProps = state => {
  return {
    pushStart: state.pusherReducer.pusherFetch,
    pushSuccess: state.pusherReducer.pusherSuccess,
    pushFailure: state.pusherReducer.pusherFailure,
    chatData: state.pusherReducer.data
  };
};

export default connect(
  mapStateToProps,
  { pushMessage }
)(ChatWindow);

const StyledChatWindow = styled.div`
  width: 270px;
  border: 1px solid black;
  border-radius: 4px;
  height: 470px;
  margin: 200px auto;

  .styled-list-container {
    height: 85%;
  }

  input {
    border-radius: 10px;

    border: 1px solid gray;

    height: 22px;

    width: 44%;

    padding: 5px 20px;
  }

  button {
    border-radius: 10px;

    padding: 10px;

    margin: 0px 5px;

    background: lightblue;

    border: none;
  }
`;
