import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Header_Chart = () => {
  return (
    <div>
      <h1>Metrics Dashboard</h1>
      <Link to={`/chart/rejects`}>
        <Button outline color="info" className="Next_Button">
          Reject Analysis
        </Button>
      </Link>
      <Link to={`/chart/facility`}>
        <Button outline color="info" className="Next_Button">
          Facility Analysis
        </Button>
      </Link>
      <Link to={`/chart/rejects/cost`}>
        <Button outline color="info" className="Next_Button">
          Reject Cost Analysis
        </Button>
      </Link>
    </div>
  );
};

export default Header_Chart;
