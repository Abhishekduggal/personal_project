import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const FormDisplayCard = props => {
  let {
    formid,
    imgurl,
    issuecategory,
    issueresolution,
    issuelog,
    comments
  } = props.form;

  return (
    <Card>
      <CardBody>
        <CardTitle>{issuecategory}</CardTitle>
        <CardSubtitle>{issueresolution}</CardSubtitle>
      </CardBody>
      <CardImg width="100%" src={imgurl} alt="" />
      <CardBody>
        <CardText>{`Issue: ${issuelog}`}</CardText>
        <CardText>{`Comments: ${comments}`}</CardText>
        <Link to="/dashboard/table" action="replace">
          Detailed Table
        </Link>
      </CardBody>
      {props.user.user.isadmin && (
        <Button
          className="delete_button"
          color="danger"
          onClick={() => props.deleteForm(formid)}
        >
          Delete this Form
        </Button>
      )}
    </Card>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FormDisplayCard);
