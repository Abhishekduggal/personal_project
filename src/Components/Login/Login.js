import React, { Component } from "react";

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
          <button>Sign In</button>
        </a>
        <a href={process.env.REACT_APP_LOGOUT}>
          <button>Sign Out</button>
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
