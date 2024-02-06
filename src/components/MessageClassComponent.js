import { Component } from "react";
class Message extends Component {
  render() {
    return (
      <>
        <h2>Message: {this.props.messageContent}</h2>
        {this.props.messageCode}
      </>
    );
  }
}

export default Message;
