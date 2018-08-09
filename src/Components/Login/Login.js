import React, { Component } from "react";
import { Button } from "reactstrap";

class Login extends Component {
  render() {
    return (
      <div>
        <a href={process.env.REACT_APP_LOGIN}>
          <Button color="primary">Sign In</Button>
        </a>
        <a href={process.env.REACT_APP_LOGOUT}>
          <Button color="danger">Sign Out</Button>
        </a>
      </div>
    );
  }
}

export default Login;
