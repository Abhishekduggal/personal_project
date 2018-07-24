import React, { Component } from "react";
import { connect } from "react-redux";

import { getForms, deleteForm } from "../../ducks/formReducer";
import FormCard from "../Cards/FormCard";

class User_Dashboard extends Component {
  componentDidMount() {
    this.props.getForms();
  }
  render() {
    // console.log(this.props);
    const { isLoading, forms } = this.props.forms;
    // console.log(isLoading);
    // console.log(forms);
    return (
      <div>
        {isLoading && <p> Loading.... </p>}
        {forms[0] &&
          forms.map((form, i) => (
            <div className="user_dashboard" key={i}>
              <FormCard form={form} deleteForm={this.props.deleteForm} />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getForms, deleteForm }
)(User_Dashboard);
