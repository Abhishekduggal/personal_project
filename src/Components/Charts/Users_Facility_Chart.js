import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import HeaderChart from "../Charts/Header_Chart";

class Users_Facility_Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    };
  }
  componentDidMount() {
    this.getUserFacility();
  }

  getUserFacility() {
    axios.get("/api/charts/users/facility").then(res => {
      this.setState({ allData: res.data });
      //   console.log(this.state.allData);
    });
  }

  render() {
    let dataArr = [];
    let labelArr = [];
    let colorArr = ["cyan", "blue"];

    this.state.allData.forEach(elem => {
      dataArr.push(elem.count);
      labelArr.push(elem.facilityname);
    });

    let data = {
      labels: labelArr,
      datasets: [
        {
          label: "Rejects",
          data: dataArr,
          backgroundColor: colorArr
        }
      ]
    };

    return (
      <div className="Chart">
        <HeaderChart />
        <Pie
          data={data}
          options={{
            title: {
              display: true,
              text: "Count of Employees by Facility",
              fontSize: 30
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default Users_Facility_Chart;
