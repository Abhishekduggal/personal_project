import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getForms, deleteForm } from "../../ducks/formReducer";
import { getUser } from "../../ducks/userReducer";
import FormDisplay from "../Cards/FormDisplay";

class Main_Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
      isAdmin: false,
      isManager: false
    };
  }

  componentDidMount() {
    this.props.getUser();
    this.props.getForms();
  }
  render() {
    if (this.props.user.user.message) {
      return <Redirect to={"/login"} />;
    }

    let { forms } = this.props.forms;
    let displayForms = forms.map((form, i) => {
      // console.log(form);
      return (
        <div key={i} className="display_form">
          <FormDisplay form={form} deleteForm={this.props.deleteForm} />
        </div>
      );
    });
    return <div>{displayForms}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getForms, deleteForm, getUser }
)(Main_Dashboard);
