import React, { Component } from "react";
import axios from "axios";

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
          <div key={i} className="specifications">
            <h2> {`Product ID: ${productid} ${productdescription}`}</h2>
            <h2>{`Cost USD$ ${productcost}`}</h2>
            <h3>{`Temperature K: ${temp}`}</h3>
            <h3>{`Product Speed: ${productspeed}`}</h3>
            <h3>{`Product Density: ${productdensity}`}</h3>
            <h3>{`Number of rejects: ${rejects} `}</h3>
            <h3>{`Water Pressure: ${waterpressure} `}</h3>
            <h3>{`Dry level: ${drylevel}`}</h3>
            <h3>{`Machine Speed: ${machinespeed}`}</h3>
          </div>
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
