import React, { Component } from "react";
import { Alert } from "reactstrap";

class Login extends Component {
  render() {
    return (
      <div>
        <Alert color="primary">
          Welcome to QualAssure{" "}
          <a href={process.env.REACT_APP_LOGIN} className="alert-link">
            Sign in
          </a>
          . Give it a click if you like!
        </Alert>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <a href={process.env.REACT_APP_LOGIN}>
          <Button color="primary">Sign In</Button>
        </a> */}
        {/* <a href={process.env.REACT_APP_LOGOUT}>
          <Button color="danger">Sign Out</Button>
        </a> */}
      </div>
    );
  }
}

export default Login;
