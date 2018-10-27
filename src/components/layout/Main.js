import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  Area,
  ResponsiveContainer
} from "recharts";

class Main extends Component {
  render() {
    let data = [{ x: 1, y: 2 }, { x: 2, y: 3 }];
    return (
      <div className="container-fluid main">
        <h2 className="dashTitle">DashBoard</h2>
        <div className="row">
          <div className="col-5 chartContainer">
            <h3>Temperatura Chart</h3>
          </div>
          <div className="col-6 chartContainer">
            <h3>Umidade Chart</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-3 chartContainer">
            <h3>Outro chart</h3>
          </div>
          <div className="col-8 chartContainer">
            <h3>Mais outro Chart</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
