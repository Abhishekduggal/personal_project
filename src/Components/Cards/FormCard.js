import React from "react";
// import Button from "../Buttons/FormButton";

const formCardStyles = {
  height: "500px",
  //width: "600px",
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const FormCard = props => {
  // console.log(props);
  let {
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
  } = props.form;

  return (
    <div className="form_display" style={formCardStyles}>
      <h2>{issuecategory}</h2>
      <h3>{issueresolution}</h3>
      <h4>{rejects}</h4>
      <div>
        {createdate}
        {machinetype}
        {shift}
        {shopordernumber}
        {productid}
        {workstation}
        {temp}
        {productspeed}
        {productspeed}
        {productdensity}
        {waterpressure}
        {drylevel}
        {issuelog}
        {machineoperating}
        {comments}
        {packagingissue}
        {training}
        {trainingcategory}
        {imgurl}
      </div>
    </div>
  );
};
export default FormCard;
