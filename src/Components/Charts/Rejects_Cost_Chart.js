import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import HeaderChart from "../Charts/Header_Chart";

class Rejects_Cost_Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    };
  }
  componentDidMount() {
    this.getRejects();
  }

  getRejects() {
    axios.get("/api/charts/rejects").then(res => {
      this.setState({ allData: res.data });
      // console.log(this.state.allData);
    });
  }

  render() {
    let dataArr = [];
    let labelArr = [];
    let colorArr = [];

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    this.state.allData.forEach(elem => {
      dataArr.push(elem.shopordernumber);
      labelArr.push(elem.rejects);
      colorArr.push("rgba(" + r + "," + g + "," + b + ")");
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
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: "Cost of Rejects by Work Order",
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
export default Rejects_Cost_Chart;
