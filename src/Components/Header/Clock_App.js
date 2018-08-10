import React, { Component } from "react";
import Clock from "react-clock";

class Clock_App extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}
      >
        <Clock value={this.state.date} />
      </div>
    );
  }
}
export default Clock_App;
