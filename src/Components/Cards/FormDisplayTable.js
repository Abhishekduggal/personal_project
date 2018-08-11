import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const FormDisplayTable = props => {
  let formsdata = props.forms.forms.map((item, i) => {
    let {
      formid,
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
      drylevel
    } = item;

    return (
      <tr key={i}>
        <th scope="row">{formid}</th>
        <td>{machinetype}</td>
        <td>{shift}</td>
        <td>{shopordernumber}</td>
        <td>{productid}</td>
        <td>{workstation}</td>
        <td>{temp}</td>
        <td>{productspeed}</td>
        <td>{hrid}</td>
        <td>{productdensity}</td>
        <td>{rejects}</td>
        <td>{waterpressure}</td>
        <td>{drylevel}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Forms Data</h1>

      <Table responsive hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>MachineType</th>
            <th>Shift</th>
            <th>ShopOrder</th>
            <th>Product</th>
            <th>Workstation</th>
            <th>Temperature</th>
            <th>Speed</th>
            <th>HR</th>
            <th>Density</th>
            <th>Rejects</th>
            <th>Water</th>
            <th>DryLevel</th>
          </tr>
        </thead>
        <tbody>{formsdata}</tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FormDisplayTable);
