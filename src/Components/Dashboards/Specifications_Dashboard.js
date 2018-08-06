import React, { Component } from "react";
import axios from "axios";

class Specifications_Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      specifications: []
    };
    this.getAllSpecifications = this.getAllSpecifications.bind(this);
  }

  componentDidMount(getAllSpecifications) {
    this.getAllSpecifications();
  }

  getAllSpecifications() {
    axios.get("/api/products/specifications").then(res => {
      //   console.log(res);
      this.setState({ specifications: res.data });
    });
  }
  render() {
    let specifications = this.state.specifications.map((spec, i) => {
      //   console.log(spec);
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
    return <div>{specifications}</div>;
  }
}

export default Specifications_Dashboard;
