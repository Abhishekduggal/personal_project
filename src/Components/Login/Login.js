import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <a href={process.env.REACT_APP_LOGIN}>
          <button>Sign In</button>
        </a>
        <a href={process.env.REACT_APP_LOGOUT}>
          <button>Sign Out</button>
        </a>
      </div>
    );
  }
}

export default Login;
