import React, { Component } from "react";
import { connect } from "react-redux";

import { getForms, deleteForm, updateFormValue } from "../../ducks/formReducer";
import FormCard from "../Cards/FormCard";
// import axios from "axios";

class User_Dashboard extends Component {
  state = { text: "" };
  componentDidMount() {
    this.props.getForms();
    // Example to review later for Admin / Manager user
    // constructor() {
    //   super();
    //   this.state = {
    //     isadmin: false
    //   };
    // }
    // axios.get("/api/get-user").then(response => {
    //   if (response.data.isadmin) {
    //     alert("Hello admin");
    //     this.setState({ isadmin: true });
    //     this.props.getForms();
    //   } else {
    //     alert("You are not an admin... i will redirect you...");
    //   }
    // });
  }
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  handleFocusOut = (event, id) => {
    this.setState({ [event.target.name]: false });
    if (event.target.value) {
      this.props
        .updateFormValue({ [event.target.name]: this.state.text }, id)
        .then(() => this.props.getForms());
    }
  };
  handleClickCheck = e => {
    this.setState({ [e.target.getAttribute("name")]: true });
  };
  render() {
    // console.log(this.props);
    const { isLoading, forms } = this.props.forms;
    return (
      <div>
        {isLoading && <p> Loading.... </p>}
        {forms[0] &&
          forms.map((form, i) => (
            <div className="user_dashboard" key={i}>
              <FormCard
                form={form}
                deleteForm={this.props.deleteForm}
                handleClickCheck={this.handleClickCheck}
                handleChange={this.handleChange}
                handleFocusOut={this.handleFocusOut}
                parentState={this.state}
              />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getForms, deleteForm, updateFormValue }
)(User_Dashboard);
