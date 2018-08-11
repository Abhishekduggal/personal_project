import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  toggleRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a business site designed to track Quality Assurance forms.
            There is a Management Dashboard that has chart metrics to show
            perfomance at the shop floor.
          </p>
          <hr className="my-2" />
          <p>
            Technologies used: React, Redux, FirebaseStorage, NodeJS, Massive,
            Express, SQL, Auth0, NodeMailer, Twilio, ChartJS, ReactStrap
          </p>
          <p className="lead">
            <Button color="primary" onClick={this.toggleRedirect}>
              Learn More
            </Button>
          </p>
        </Jumbotron>
        {this.state.redirect && <Redirect to="/login" />}
      </div>
    );
  }
}
export default Welcome;
