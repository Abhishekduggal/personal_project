import React from "react";

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

const FormCard = props => {
  let { formid, createdate, imgurl, ...restOfItems } = props.form;
  const items = Object.entries(restOfItems);
  return (
    <div className="form_display" style={formCardStyles}>
      {items.map((val, i) => (
        <div key={i}>
          {!props.parentState[val[0]] ? (
            <p name={val[0]} onClick={e => props.handleClickCheck(e)}>
              {val[0]} value: {val[1]}
            </p>
          ) : (
            <input
              onChange={props.handleChange}
              onBlur={e => props.handleFocusOut(e, formid)}
              name={val[0]}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormCard;
