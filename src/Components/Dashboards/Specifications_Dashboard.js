import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

class Specifications_Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      specifications: [],
      search: ""
    };
    this.getAllSpecifications = this.getAllSpecifications.bind(this);
  }

  componentDidMount(getAllSpecifications) {
    this.getAllSpecifications();
  }

  getAllSpecifications() {
    axios.get("/api/products/specifications").then(res => {
      this.setState({ specifications: res.data });
    });
  }

  handleInputChange(search) {
    this.setState({ search: search });
  }

  render() {
    let specifications = this.state.specifications
      .filter((spec, i) => {
        let { productdescription } = spec;
        return productdescription.includes(this.state.search);
      })
      .map((spec, i) => {
        let {
          productid,
          productdescription,
          productcost,
          temp,
          productspeed,
          productdensity,
          rejects,
          waterpressure,
          drylevel,
          machinespeed
        } = spec;

        return (
          // <CardDeck>
          <Card>
            <CardBody>
              {/* <div key={i} className="specifications"> */}
              <CardTitle>${productdescription}</CardTitle>
              <CardSubtitle>{`Product ID: ${productid}`}</CardSubtitle>
              <CardSubtitle
              >{`Product ID: ${productid} ${productdescription}`}</CardSubtitle>
              <CardSubtitle>{`Cost USD$ ${productcost}`}</CardSubtitle>
              <CardSubtitle>{`Temperature K: ${temp}`}</CardSubtitle>
              <CardSubtitle>{`Product Speed: ${productspeed}`}</CardSubtitle>
              <CardSubtitle
              >{`Product Density: ${productdensity}`}</CardSubtitle>
              <CardSubtitle>{`Number of rejects: ${rejects} `}</CardSubtitle>
              <CardSubtitle>{`Water Pressure: ${waterpressure} `}</CardSubtitle>
              <CardSubtitle>{`Dry level: ${drylevel}`}</CardSubtitle>
              <CardSubtitle>{`Machine Speed: ${machinespeed}`}</CardSubtitle>
              {/* </div> */}
            </CardBody>
          </Card>
          // </CardDeck>
        );
      });
    return (
      <div>
        <h1>Product Standard Specification</h1>
        <input
          onChange={e => this.handleInputChange(e.target.value)}
          type="text"
          value={this.state.search || ""}
          placeholder="Search a Product"
        />
        {specifications}
      </div>
    );
  }
}

export default Specifications_Dashboard;
