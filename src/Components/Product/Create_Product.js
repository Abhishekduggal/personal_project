import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
      <section>
        <h3>Product Form</h3>
        <input
          className="Description_Input"
          placeholder="Description of the Product"
          value={productdescription}
          onChange={e => this.updateDescriptionInput(e.target.value)}
        />

        <input
          className="Product_Cost"
          placeholder="Product Cost"
          value={productcost}
          onChange={e => this.updateCostInput(e.target.value)}
        />

        <div className="Add_Product">
          <button onClick={this.handleClickAddProduct}>Add Product</button>
        </div>

        <div className="Cancel_Product">
          <button onClick={this.handleClickCancelProduct}>
            Cancel Product
          </button>
        </div>
      </section>
    );
  }
}

export default Create_Product;
