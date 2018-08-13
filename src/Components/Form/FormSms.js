import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button, Alert, FormGroup, Input } from "reactstrap";
import Swal from "sweetalert2";

class FormSms extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      message: "",
      redirect: false
    };
    this.updateSendSms = this.updateSendSms.bind(this);
    this.handleSendSms = this.handleSendSms.bind(this);
  }
  updateSendSms(message) {
    this.setState({ message: message });
  }

  handleSendSms(message) {
    axios
      .post("/api/sms", { message })
      .then(() => {
        Swal("Message Sent!", "Manager has been notified!", "success");
      })
      .then(() => {
        this.setState({ redirect: true });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/dashboard"} />;
    }
    return (
      <div>
        <Alert color="info">Send an urgent message!</Alert>

        <FormGroup>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            className="Input"
            value={this.state.message || ""}
            onChange={e => this.updateSendSms(e.target.value)}
            placeholder="Select the option to send a quick message"
          >
            <option value="Select">Select</option>
            <option value="I need help immediately">I need help</option>
            <option value="Stop Production">Stop Production</option>
            <option value="Packaging line down">Packaging Line down</option>
            <option value="Emergency Situation">Emergency</option>
            <option value="Operator Missing">Operator Missing</option>
          </Input>
        </FormGroup>
        <Button
          color="success"
          onClick={() => this.handleSendSms(this.state.message)}
        >
          Click to send Message
        </Button>
      </div>
    );
  }
}

export default FormSms;
