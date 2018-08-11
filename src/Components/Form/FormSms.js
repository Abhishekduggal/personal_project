import React, { Component } from "react";
import axios from "axios";
import { Button, Alert, FormGroup, Input } from "reactstrap";

class FormSms extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      message: ""
    };
    this.updateSendSms = this.updateSendSms.bind(this);
    this.handleSendSms = this.handleSendSms.bind(this);
  }
  updateSendSms(message) {
    this.setState({ message: message });
  }

  handleSendSms(message) {
    axios.post("/api/sms", { message }).then(res => {
      // window.alert("SMS Message Sent");
    });
  }

  render() {
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
