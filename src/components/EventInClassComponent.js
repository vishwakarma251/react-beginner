import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    console.log("This is a Class Based Event!");
  }
  render() {
    return (
      <>
        This is a Class Based Event{" "}
        <button onClick={this.handleClick}>Click Here</button>
      </>
    );
  }
}

export default ClassEvent;
