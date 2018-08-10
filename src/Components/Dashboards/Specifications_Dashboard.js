import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
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
          <tr key={i}>
            <th scope="row">{productid}</th>
            <td>{productdescription}</td>
            <td>{productcost}</td>
            <td>{temp}</td>
            <td>{productspeed}</td>
            <td>{productdensity}</td>
            <td>{rejects}</td>
            <td>{waterpressure}</td>
            <td>{drylevel}</td>
            <td>{machinespeed}</td>
          </tr>
        );
      });
    return (
      <div>
        <h1>Product Standard Specifications</h1>

        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>Search</InputGroupText>
          </InputGroupAddon>
          <Input
            onChange={e => this.handleInputChange(e.target.value)}
            type="text"
            value={this.state.search || ""}
            placeholder="Description"
          />
        </InputGroup>

        <Table hover>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Description</th>
              <th>Cost $</th>
              <th>Temperature</th>
              <th>Speed</th>
              <th>Density</th>
              <th>Rejects</th>
              <th>Water</th>
              <th>DryLevel</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>{specifications}</tbody>
        </Table>
      </div>
    );
  }
}

export default Specifications_Dashboard;
