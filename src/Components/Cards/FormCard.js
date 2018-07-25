import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCommentsInput } from "../../ducks/formInputReducer";

const formCardStyles = {
  height: "1500px",
  width: "Auto",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "space-around",
  border: "2px solid blue",
  backgroundColor: "lightblue",
  fontSize: "18px",
  padding: "10px"
};

class FormCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
      editing: false,
      firstName: "Joe",
      clicked: false,
      age: 0
    };
  }

  handleChange = event => {
    this.setState({ form: this.props.form });
    let { comments } = this.state.form;
    comments = "dfadfasdf";
    console.log(comments);
    // this.setState.{form: comments:'dfsadf'}
    console.log(this.state.form.comments);
    // this.setState.form({ comments: "fdafaf" });
    //console.log([event.target.name], event.target.value);
    // this.props.updateCommentsInput(event.target.value);
    // this.state.form:({ [event.target.name]: event.target.value });
    // console.log(this.state.form);
  };
  render() {
    // console.log(this.props.form);
    let {
      formid,
      machinetype,
      shift,
      shopordernumber,
      createdate,
      productid,
      workstation,
      temp,
      productspeed,
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
    } = this.props.form;
    // console.log(this.state.clicked);
    // console.log(this.props);
    return (
      <div className="form_display" style={formCardStyles}>
        <h2>{issuecategory}</h2>
        <h3>{issueresolution}</h3>
        <h4>{rejects}</h4>
        <div>
          <div>{createdate}</div>
          <div>{machinetype}</div>
          <div>{shift}</div>
          <div>{shopordernumber}</div>
          <div>{productid}</div>
          <div>{workstation}</div>
          <div>{temp}</div>
          <div>{productspeed}</div>
          <div>{productdensity}</div>
          <div>{waterpressure}</div>
          <div>{drylevel}</div>
          <div>{issuelog}</div>
          <div>{machineoperating}</div>
          <div>{comments}</div>
          <div>{packagingissue}</div>
          <div>{training}</div>
          <div>{trainingcategory}</div>
          <img src={imgurl} alt="" />
        </div>
        <div>
          <button
            className="delete_button"
            onClick={() => this.props.deleteForm(formid)}
          >
            Delete Form
          </button>
          {/* JOES CODE */}
          {this.state.clicked ? (
            <div>
              <input
                name="firstName"
                value={this.state.firstName}
                placeholder="enter name"
                onChange={this.handleChange}
              />
              <input
                // name="age"
                // value={this.state.age}
                name="comments"
                placeholder="enter comments"
                onChange={event => this.handleChange(event)}
              />
            </div>
          ) : (
            <h2 onClick={() => this.setState({ clicked: !this.state.clicked })}>
              {comments}
            </h2>
            //    <h2 onClick={() => this.setState({ clicked: !this.state.clicked })}>
            //    {this.state.firstName}
            //  </h2>
          )}

          <button
            onClick={() => {
              console.log("new name", this.state.name);
              this.setState({ clicked: false });
            }}
          >
            Reset Name
          </button>
          {/* JOES CODE */}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateCommentsInput
};

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCard);
