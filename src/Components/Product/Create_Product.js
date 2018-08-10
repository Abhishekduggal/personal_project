import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";

const axios = require("axios");

class Create_Product extends Component {
  constructor() {
    super();
    this.state = {
      productid: null,
      newproductid: null,
      productdescription: "",
      productcost: "",
      redirect: false
    };
    this.handleClickCancelProduct = this.handleClickCancelProduct.bind(this);
    this.updateDescriptionInput = this.updateDescriptionInput.bind(this);
    this.updateCostInput = this.updateCostInput.bind(this);
    this.handleClickAddProduct = this.handleClickAddProduct.bind(this);
  }

  updateDescriptionInput(productdescription) {
    this.setState({ productdescription: productdescription });
  }

  updateCostInput(productcost) {
    this.setState({ productcost: productcost });
  }

  handleClickCancelProduct() {
    this.setState({
      productid: "",
      productdescription: "",
      productcost: 0
    });
  }

  createProduct(productdescription, productcost) {
    axios
      .post("/api/product/create", { productdescription, productcost })
      .then(res => {
        // console.log(res.data);
        this.setState({
          newproductid: res.data[res.data.length - 1].productid,
          redirect: true
        });
      });
  }

  async handleClickAddProduct() {
    let { productdescription, productcost } = this.state;

    await this.createProduct(productdescription, productcost);

    await this.setState({
      productid: null,
      productdescription: "",
      productcost: 0
    });
  }

  render() {
    let { productdescription, productcost } = this.state;

    if (this.state.redirect) {
      return (
        <Redirect to={"/specification/create/" + this.state.newproductid} />
      );
    }

    return (
      <Form>
        <h2>Product Development Form</h2>

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Product</InputGroupText>
          </InputGroupAddon>
          <Input
            className="Description_Input"
            placeholder="Product Description"
            value={productdescription}
            onChange={e => this.updateDescriptionInput(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>Description</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input
            className="Product_Cost"
            placeholder="Product Cost"
            value={productcost}
            onChange={e => this.updateCostInput(e.target.value)}
          />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>

        <br />

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button
              color="success"
              type="submit"
              value="Submit"
              onClick={this.handleClickAddProduct}
            >
              Next Step
            </Button>
          </Col>
        </FormGroup>

        <br />

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button
              color="warning"
              type="reset"
              value="Reset"
              onClick={this.handleClickCancelProduct}
            >
              Cancel
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Create_Product;
