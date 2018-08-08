import React, { Component } from "react";
import { Button } from "reactstrap";

import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";

class Login extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <a href={process.env.REACT_APP_LOGIN}>
          <Button>Sign In</Button>
        </a>
        <a href={process.env.REACT_APP_LOGOUT}>
          <Button color="danger">Sign Out</Button>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Login);
