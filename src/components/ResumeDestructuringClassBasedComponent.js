import { Component } from "react";

class Resume extends Component {
  render() {
    const { name } = this.props;
    return <h1>Destructuring in Class Based Component: {name}</h1>;
  }
}

export default Resume;
