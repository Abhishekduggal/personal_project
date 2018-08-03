import React from "react";

const FormDisplay = props => {
  let { formid, imgurl, ...restofItems } = props.form;
  const items = Object.entries(restofItems);

  return (
    <div className="form_display">
      {items.map((item, i) => (
        <div key={i}>
          <h3>{[item[1]]}</h3>
          {[item[0]]}
        </div>
      ))}
      <button
        className="delete_button"
        onClick={() => props.deleteForm(formid)}
      >
        Delete this Form
      </button>
      <img src={imgurl} alt="" />
    </div>
  );
};
export default FormDisplay;
