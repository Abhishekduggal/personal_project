import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FormStyles from "./FormStyles";
import {
  updateMachineTypeInput,
  updateShiftInput,
  updateShopOrderNumberInput,
  updateProductIdInput,
  updateWorstationInput,
  updateTempInput,
  updateProductSpeedInput,
  updateHrIdInput,
  updateProductDensityInput,
  updateRejectsInput,
  updateWaterPressureInput,
  updateDryLevelInput,
  updateIssueLogInput,
  updateMachineOperatingInput,
  updateCommentsInput,
  updateIssueCategoryInput,
  updateIssueResolutionInput,
  updatePackagingIssueInput,
  updateTrainingInput,
  updateTrainingCategoryInput,
  updateImgUrlInput,
  reset
} from "../../ducks/formInputReducer";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {
    let {
      machinetype,
      shift,
      shopordernumber,
      productid,
      workstation,
      temp,
      productspeed,
      hrid,
      productdensity,
      rejects,
      waterpressure,
      drylevel,
      issuelog,
      machineoperating,
      comments,
      issuecategory,
      issueresolution,
      packagingissue,
      training,
      trainingcategory,
      imgurl
    } = this.props.formInput;
    // console.log(shift);

    axios
      .post("/api/form/create", {
        machinetype,
        shift,
        shopordernumber,
        productid,
        workstation,
        temp,
        productspeed,
        hrid,
        productdensity,
        rejects,
        waterpressure,
        drylevel,
        issuelog,
        machineoperating,
        comments,
        issuecategory,
        issueresolution,
        packagingissue,
        training,
        trainingcategory,
        imgurl
      })
      .then(res => {
        axios.post("/api/email", {
          issuecategory,
          trainingcategory,
          sendemail: process.env.REACT_APP_SEND_EMAIL
        });
        this.props.reset();
      });
    // console.log(this.props.formInput);
  }
  render() {
    // console.log(this.props.formInput);

    let {
      machinetype,
      shift,
      shopordernumber,
      productid,
      workstation,
      temp,
      productspeed,
      hrid,
      productdensity,
      rejects,
      waterpressure,
      drylevel,
      issuelog,
      machineoperating,
      comments,
      issuecategory,
      issueresolution,
      packagingissue,
      training,
      trainingcategory,
      imgurl
    } = this.props.formInput;

    return (
      <form
        className="container"
        onSubmit={this.handleSubmitForm}
        onReset={this.props.reset}
        style={FormStyles}
      >
        <h2>QA Audit Form</h2>
        <label>
          Machine Type
          <input
            className="Input"
            value={machinetype || ""}
            placeholder="Machine Type"
            onChange={e => this.props.updateMachineTypeInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Select the Shift
          <select
            className="Input"
            value={shift || ""}
            onChange={e => this.props.updateShiftInput(e.target.value)}
            placeholder="Select the Shift"
          >
            <option value="Select">Select</option>
            <option value="Shift1">Shift-1</option>
            <option value="Shift2">Shift-2</option>
            <option value="Shift3">Shift-3</option>
            <option value="Shift4">Shift-4</option>
            <option value="Shift5">Shift-5</option>
          </select>
        </label>
        <br />
        <label>
          Shop Order Number
          <input
            className="Input"
            value={shopordernumber || ""}
            placeholder="Shop Order Number"
            onChange={e =>
              this.props.updateShopOrderNumberInput(e.target.value)
            }
          />
        </label>
        <br />
        <label>
          Product ID
          <input
            className="Input"
            value={productid || ""}
            placeholder="Product ID"
            onChange={e => this.props.updateProductIdInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Worstation Condition
          <input
            className="Input"
            value={workstation || ""}
            placeholder="Workstation Condition"
            onChange={e => this.props.updateWorstationInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Temperature of the Machine
          <input
            className="Input"
            value={temp || ""}
            placeholder="Temperature"
            onChange={e => this.props.updateTempInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Product Speed
          <input
            className="Input"
            value={productspeed || ""}
            placeholder="Product Speed"
            onChange={e => this.props.updateProductSpeedInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          HR ID of the team member
          <input
            className="Input"
            value={hrid || ""}
            placeholder="HR ID"
            onChange={e => this.props.updateHrIdInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Product Density
          <input
            className="Input"
            value={productdensity || ""}
            placeholder="Product Density"
            onChange={e => this.props.updateProductDensityInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number of Rejects
          <input
            className="Input"
            value={rejects || ""}
            placeholder="Rejects"
            onChange={e => this.props.updateRejectsInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Water Pressure
          <input
            className="Input"
            value={waterpressure || ""}
            placeholder="Pressure"
            onChange={e => this.props.updateWaterPressureInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Dry Level Amount
          <input
            className="Input"
            value={drylevel || ""}
            placeholder="Dry Level"
            onChange={e => this.props.updateDryLevelInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Issue Log
          <input
            className="Input"
            value={issuelog || ""}
            placeholder="Log"
            onChange={e => this.props.updateIssueLogInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Machine Operating
          <select
            className="Input"
            value={machineoperating || ""}
            onChange={e =>
              this.props.updateMachineOperatingInput(e.target.value)
            }
            placeholder="Machine Operating"
          >
            <option value="Select">Select</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </label>
        <br />
        <label>
          Comments
          <input
            className="Input"
            value={comments || ""}
            placeholder="Comments"
            onChange={e => this.props.updateCommentsInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Issue Category
          <input
            className="Input"
            value={issuecategory || ""}
            placeholder="Category"
            onChange={e => this.props.updateIssueCategoryInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Resolution
          <input
            className="Input"
            value={issueresolution || ""}
            placeholder="Resolution"
            onChange={e =>
              this.props.updateIssueResolutionInput(e.target.value)
            }
          />
        </label>
        <br />
        <label>
          Packaging Issue
          <select
            className="Input"
            value={packagingissue || ""}
            onChange={e => this.props.updatePackagingIssueInput(e.target.value)}
            placeholder="Machine Operating"
          >
            <option value="Select">Select</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </label>
        <br />
        <label>
          Training Required
          <select
            className="Input"
            value={training || ""}
            onChange={e => this.props.updateTrainingInput(e.target.value)}
            placeholder="Training"
          >
            <option value="Select">Select</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </label>
        <br />
        <label>
          Training Category
          <input
            className="Input"
            value={trainingcategory || ""}
            placeholder="Training Category"
            onChange={e =>
              this.props.updateTrainingCategoryInput(e.target.value)
            }
          />
        </label>
        <br />
        <label>
          Image URL
          <input
            className="Input"
            value={imgurl || ""}
            placeholder="URL"
            onChange={e => this.props.updateImgUrlInput(e.target.value)}
          />
        </label>
        <br />
        <button
          type="submit"
          className="Input"
          value="Submit"
          onChange={this.handleSubmitForm}
        >
          Submit
        </button>
        <br />
        <button
          type="reset"
          className="Input"
          value="Reset"
          onChange={this.props.reset}
        >
          Reset
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  updateMachineTypeInput,
  updateShiftInput,
  updateShopOrderNumberInput,
  updateProductIdInput,
  updateWorstationInput,
  updateTempInput,
  updateProductSpeedInput,
  updateHrIdInput,
  updateProductDensityInput,
  updateRejectsInput,
  updateWaterPressureInput,
  updateDryLevelInput,
  updateIssueLogInput,
  updateMachineOperatingInput,
  updateCommentsInput,
  updateIssueCategoryInput,
  updateIssueResolutionInput,
  updatePackagingIssueInput,
  updateTrainingInput,
  updateTrainingCategoryInput,
  updateImgUrlInput,
  reset
};
function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
