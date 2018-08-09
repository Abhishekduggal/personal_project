import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import FormStyles from "./FormStyles";
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
import firebase from "../../Fire_Base";
import FileUploader from "react-firebase-file-uploader";
import {
  Button,
  Col,
  Form as FormStrap,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      isUploading: false,
      progress: 0,
      redirect: false
    };
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ image: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("personalprojectimages")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ url: url });
      });
  };

  handleSubmitForm = event => {
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
    // console.log(imgurl);
    imgurl = this.state.url;
    event.preventDefault();

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
        // console.log(res);
        axios.post("/api/email", {
          issuecategory,
          trainingcategory,
          sendemail: process.env.REACT_APP_SEND_EMAIL
        });
        this.props.reset();
        this.setState = {
          image: null,
          url: "",
          isUploading: false,
          progress: 0,
          redirect: true
        };

        //Page not being redirected

        if (this.state.redirect) {
          return <Redirect to={"/dashboard"} />;
        }
      });
  };

  render() {
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
    imgurl = this.state.url;

    return (
      <FormStrap
        className="container"
        onSubmit={event => this.handleSubmitForm(event)}
        onReset={this.props.reset}
        // style={FormStyles}
      >
        <h2>QA Audit Tracking Form</h2>
        <FormGroup row>
          <Label sm={2}>MachineType</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={machinetype || ""}
              placeholder="Machine Type"
              onChange={e => this.props.updateMachineTypeInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Select Shift</Label>
          <Col sm={10}>
            <Input
              type="select"
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
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Shop Order</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={shopordernumber || ""}
              placeholder="Shop Order Number"
              onChange={e =>
                this.props.updateShopOrderNumberInput(e.target.value)
              }
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Product ID</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={productid || ""}
              placeholder="Product ID"
              onChange={e => this.props.updateProductIdInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Worstation</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={workstation || ""}
              placeholder="Workstation Condition"
              onChange={e => this.props.updateWorstationInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Temperature</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={temp || ""}
              placeholder="Temperature of the Machine"
              onChange={e => this.props.updateTempInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Speed</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={productspeed || ""}
              placeholder="Product Running Speed"
              onChange={e => this.props.updateProductSpeedInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Operator ID</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={hrid || ""}
              placeholder="Operator ID"
              onChange={e => this.props.updateHrIdInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Density</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={productdensity || ""}
              placeholder="Product Density"
              onChange={e =>
                this.props.updateProductDensityInput(e.target.value)
              }
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Rejects</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={rejects || ""}
              placeholder="Number of Rejects"
              onChange={e => this.props.updateRejectsInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Pressure</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={waterpressure || ""}
              placeholder="Water Pressure"
              onChange={e =>
                this.props.updateWaterPressureInput(e.target.value)
              }
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Dry Level</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={drylevel || ""}
              placeholder="Dry Level Amount"
              onChange={e => this.props.updateDryLevelInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Log</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={issuelog || ""}
              placeholder="Issue Log"
              onChange={e => this.props.updateIssueLogInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Operating</Label>
          <Col sm={10}>
            <Input
              type="select"
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
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Comments</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={comments || ""}
              placeholder="Comments"
              onChange={e => this.props.updateCommentsInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Category</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={issuecategory || ""}
              placeholder="Issue Category"
              onChange={e =>
                this.props.updateIssueCategoryInput(e.target.value)
              }
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Resolution</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={issueresolution || ""}
              placeholder="Resolution"
              onChange={e =>
                this.props.updateIssueResolutionInput(e.target.value)
              }
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>PackagingIssue</Label>
          <Col sm={10}>
            <Input
              type="select"
              className="Input"
              value={packagingissue || ""}
              onChange={e =>
                this.props.updatePackagingIssueInput(e.target.value)
              }
              placeholder="Packaging Issue"
            >
              <option value="Select">Select</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Training</Label>
          <Col sm={10}>
            <Input
              type="select"
              className="Input"
              value={training || ""}
              onChange={e => this.props.updateTrainingInput(e.target.value)}
              placeholder="Training"
            >
              <option value="Select">Select</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Category</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={trainingcategory || ""}
              placeholder="Training Category"
              onChange={e =>
                this.props.updateTrainingCategoryInput(e.target.value)
              }
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>ImageURL</Label>
          <Col sm={10}>
            <Input
              className="Input"
              value={imgurl || ""}
              placeholder="Image URL"
              onChange={e => this.props.updateImgUrlInput(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Upload</Label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.url && <img src={this.state.url} alt="" />}
          <FileUploader
            accept="image/*"
            name="image"
            randomizeFilename
            storageRef={firebase.storage().ref("personalprojectimages")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button
              color="success"
              type="submit"
              className="Input"
              value="Submit"
              onChange={this.handleSubmitForm}
            >
              Submit
            </Button>
          </Col>
        </FormGroup>
        <br />
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button
              color="warning"
              type="reset"
              className="Input"
              value="Reset"
              onChange={this.props.reset}
            >
              Reset
            </Button>
          </Col>
        </FormGroup>
      </FormStrap>
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
