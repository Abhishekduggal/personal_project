import React, { Component } from "react";
import { connect } from "react-redux";

import { getForms, deleteForm } from "../../ducks/formReducer";
import FormDisplay from "../Cards/FormDisplay";

class Main_Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      isAdmin: false,
      isManager: false
    };
  }

  componentDidMount() {
    this.props.getForms();
  }
  render() {
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
  { getForms, deleteForm }
)(Main_Dashboard);
