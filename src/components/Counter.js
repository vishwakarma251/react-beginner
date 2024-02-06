import { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // this.increment = this.increment.bind(this); // Event binding
  }
  increment = () => {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <div>
        <h3>Counter Value is: {this.state.counter}</h3>
        {/* <button type="button" className="btn" onClick={() => this.increment()}>
          Counter
        </button> */}
        <button type="button" className="btn" onClick={this.increment}>
          Counter
        </button>
      </div>
    );
  }
}

export default Counter;
