import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
      <section>
        <h3>Product Specification</h3>

        <input
          className="Product_Temp_Input"
          placeholder="Product Temperature"
          value={temp}
          onChange={e => this.updateProductTempInput(e.target.value)}
        />

        <input
          className="Product_Speed_Input"
          placeholder="Product Speed"
          value={productspeed}
          onChange={e => this.updateProductSpeedInput(e.target.value)}
        />

        <input
          className="Product_Density_Input"
          placeholder="Product Density"
          value={productdensity}
          onChange={e => this.updateProductDensityInput(e.target.value)}
        />

        <input
          className="Rejects_Input"
          placeholder="Number of Rejects"
          value={rejects}
          onChange={e => this.updateRejectsInput(e.target.value)}
        />

        <input
          className="WaterPressure_Input"
          placeholder="Product Water Pressure"
          value={waterpressure}
          onChange={e => this.updateWaterPressureInput(e.target.value)}
        />

        <input
          className="Drylevel_Input"
          placeholder="Product Dry Level"
          value={drylevel}
          onChange={e => this.updateDryLevelInput(e.target.value)}
        />

        <input
          className="Machine_Speed_Input"
          placeholder="Product Machine Speed"
          value={machinespeed}
          onChange={e => this.updateMachineSpeedInput(e.target.value)}
        />

        <div className="Add_Product">
          <button onClick={this.handleClickAddSpecification}>
            Add Specification
          </button>
        </div>

        <div className="Cancel_Product">
          <button onClick={this.handleClickCancelProduct}>
            Cancel Specification
          </button>
        </div>
      </section>
    );
  }
}

export default Create_Specification;
