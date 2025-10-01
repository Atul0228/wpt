import React, { Component } from "react";

class ExampleState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  uppercase = () => {
    const upper = this.state.name.toUpperCase();
    console.log(upper);
  };

  lowercase = () => {
    const lower = this.state.name.toLowerCase();
    console.log(lower);
  };

  render() {
    return (
      <>
        <h1>Hello from {this.props.name}</h1>

        <input
          type="text"
          placeholder="enter the name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br /><br />
        <button onClick={this.uppercase}>UpperCase</button>
        <button onClick={this.lowercase}>LowerCase</button>
      </>
    );
  }
}

export default ExampleState;
