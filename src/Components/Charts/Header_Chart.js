import React from "react";
import { Link } from "react-router-dom";

const Header_Chart = () => {
  return (
    <div>
      <h1>Metrics Dashboard</h1>
      <Link to={`/chart/rejects`}>
        <button className="Next_Button">Reject Analysis</button>
      </Link>
      <Link to={`/chart/rejects/cost`}>
        <button className="Next_Button">Reject Cost Analysis</button>
      </Link>
      <Link to={`/chart/facility`}>
        <button className="Next_Button">Facility Analysis</button>
      </Link>
    </div>
  );
};

export default Header_Chart;
