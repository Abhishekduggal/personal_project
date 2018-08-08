import React from "react";
import RejectsChart from "../Charts/Rejects_Chart";
import HeaderChart from "../Charts/Header_Chart";

const Manager_Dashboard = () => {
  return (
    <div>
      <HeaderChart />
      <RejectsChart />
    </div>
  );
};

export default Manager_Dashboard;
