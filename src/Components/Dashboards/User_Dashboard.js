import React, { Component } from "react";
import { connect } from "react-redux";

import { getForms } from "../../ducks/formGetReducer";

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
              {form.issuecategory}
              {form.issueresolution}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getForms }
)(User_Dashboard);
