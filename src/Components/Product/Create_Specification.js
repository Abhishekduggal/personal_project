import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Col, Button, Form, FormGroup, Input, FormText } from "reactstrap";

const axios = require("axios");

class Create_Specification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productid: this.props.match.params.productid,
      temp: "",
      productspeed: "",
      productdensity: "",
      rejects: "",
      waterpressure: "",
      drylevel: "",
      machinespeed: "",
      redirect: false
    };
    this.updateProductSpeedInput = this.updateProductSpeedInput.bind(this);
    this.updateProductDensityInput = this.updateProductDensityInput.bind(this);
    this.updateProductTempInput = this.updateProductTempInput.bind(this);
    this.updateRejectsInput = this.updateRejectsInput.bind(this);
    this.updateWaterPressureInput = this.updateWaterPressureInput.bind(this);
    this.updateDryLevelInput = this.updateDryLevelInput.bind(this);
    this.updateMachineSpeedInput = this.updateMachineSpeedInput.bind(this);
    this.handleClickAddSpecification = this.handleClickAddSpecification.bind(
      this
    );
    this.handleClickCancelProduct = this.handleClickCancelProduct.bind(this);
  }

  updateProductTempInput(temp) {
    this.setState({ temp: temp });
  }

  updateProductSpeedInput(productspeed) {
    this.setState({ productspeed: productspeed });
  }

  updateProductDensityInput(productdensity) {
    this.setState({ productdensity: productdensity });
  }

  updateRejectsInput(rejects) {
    this.setState({ rejects: rejects });
  }

  updateWaterPressureInput(waterpressure) {
    this.setState({ waterpressure: waterpressure });
  }

  updateDryLevelInput(drylevel) {
    this.setState({ drylevel: drylevel });
  }

  updateMachineSpeedInput(machinespeed) {
    this.setState({ machinespeed: machinespeed });
  }

  handleClickCancelProduct() {
    this.setState({
      temp: "",
      productspeed: "",
      productdensity: "",
      rejects: "",
      waterpressure: "",
      drylevel: "",
      machinespeed: ""
    });
  }

  createSpecification(
    productid,
    temp,
    productspeed,
    productdensity,
    rejects,
    waterpressure,
    drylevel,
    machinespeed
  ) {
    axios
      .post("/api/product/specification/create", {
        productid,
        temp,
        productspeed,
        productdensity,
        rejects,
        waterpressure,
        drylevel,
        machinespeed
      })
      .then(res => {
        //console.log(res.data);
        this.setState({ redirect: true });
      });
  }

  handleClickAddSpecification() {
    let {
      productid,
      temp,
      productspeed,
      productdensity,
      rejects,
      waterpressure,
      drylevel,
      machinespeed
    } = this.state;

    this.createSpecification(
      productid,
      temp,
      productspeed,
      productdensity,
      rejects,
      waterpressure,
      drylevel,
      machinespeed
    );

    this.setState({
      productid: "",
      temp: "",
      productspeed: "",
      productdensity: "",
      rejects: "",
      waterpressure: "",
      drylevel: "",
      machinespeed: ""
    });
  }

  render() {
    let {
      temp,
      productspeed,
      productdensity,
      rejects,
      waterpressure,
      drylevel,
      machinespeed
    } = this.state;

    if (this.state.redirect) {
      return <Redirect to={`/products/specifications`} />;
    }
    return (
      <Form>
        <h2>Product Specification Form</h2>

        <FormGroup>
          <Col sm={12}>
            <Input
              className="Product_Temp_Input"
              placeholder="Product Desired Temperature"
              value={temp}
              onChange={e => this.updateProductTempInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Input
              className="Product_Speed_Input"
              placeholder="Product Speed"
              value={productspeed}
              onChange={e => this.updateProductSpeedInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Input
              className="Product_Density_Input"
              placeholder="Product Density"
              value={productdensity}
              onChange={e => this.updateProductDensityInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Input
              className="Rejects_Input"
              placeholder="Number of Rejects"
              value={rejects}
              onChange={e => this.updateRejectsInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Input
              className="WaterPressure_Input"
              placeholder="Product Water Pressure"
              value={waterpressure}
              onChange={e => this.updateWaterPressureInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Input
              className="Drylevel_Input"
              placeholder="Product Dry Level"
              value={drylevel}
              onChange={e => this.updateDryLevelInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Input
              className="Machine_Speed_Input"
              placeholder="Product Machine Speed"
              value={machinespeed}
              onChange={e => this.updateMachineSpeedInput(e.target.value)}
            />
            <FormText color="muted">Product Development is complete</FormText>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="success" onClick={this.handleClickAddSpecification}>
              Create Product
            </Button>
          </Col>
        </FormGroup>

        <br />

        <FormGroup>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="warning" onClick={this.handleClickCancelProduct}>
              Cancel Specification
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Create_Specification;
