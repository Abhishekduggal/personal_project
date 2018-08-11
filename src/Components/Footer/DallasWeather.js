import React, { Component } from "react";
import axios from "axios";

const { REACT_APP_WEATHER_KEY } = process.env;
const dallasUrl = `https://api.openweathermap.org/data/2.5/forecast?id=4853335&APPID=${REACT_APP_WEATHER_KEY}&units=imperial`;

class DallasWeather extends Component {
  constructor() {
    super();

    this.state = {
      temp: "",
      outside: ""
    };
  }

  componentDidMount() {
    axios.get(dallasUrl).then(res => {
      this.setState({
        temp: res.data.list[0].main.temp,
        outside: res.data.list[0].weather[0].description
      });
    });
  }

  render() {
    return (
      <div>
        <h6>Dallas Weather: {this.state.temp} F</h6>
      </div>
    );
  }
}

export default DallasWeather;
