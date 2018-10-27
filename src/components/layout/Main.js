import React, { Component } from "react";
import { Chart, Axis, Series, Line } from "react-charts";
import tempImg from "../../img/termometer.png";
import umidImg from "../../img/umidade.png";
import fireImg from "../../img/fire.png";
import gasImg from "../../img/gas.png";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid main">
        <h2 className="dashTitle mb-3">DashBoard</h2>
        <div className="row">
          <div className="col-11 col-md-3 col-sm-6 chartContainer mt-2">
            <h3 className="text-center blockTitle">Temperatura</h3>
            <div className="row">
              <div className="col-6">
                <img src={tempImg} alt="termometer" className="temp" />
              </div>
              <div className="col-6">
                <h4 style={{ fontSize: "2rem" }} className="mt-5">
                  24 °C
                </h4>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-3 col-sm-6 chartContainer mt-2">
            <h3 className="text-center blockTitle">Umidade</h3>
            <div className="row">
              <div className="col-6">
                <img src={umidImg} alt="Umidade" className="temp" />
              </div>
              <div className="col-6">
                <h4 style={{ fontSize: "1.5rem" }} className="mt-5">
                  Umidade Moderada
                </h4>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-3 col-sm-6 chartContainer mt-2">
            <h3 className="text-center blockTitle">Chamas</h3>
            <div className="row">
              <div className="col-6">
                <img src={fireImg} alt="Chamas" className="temp" />
              </div>
              <div className="col-6">
                <h4 style={{ fontSize: "1.5rem" }} className="mt-5">
                  Sem chamas
                </h4>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-3 col-sm-6 chartContainer mt-2">
            <h3 className="text-center blockTitle">Gás</h3>
            <div className="row">
              <div className="col-6">
                <img src={gasImg} alt="Chamas" className="temp" />
              </div>
              <div className="col-6">
                <h4 style={{ fontSize: "1.5rem" }} className="mt-5">
                  Sem gás no ar
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-11 col-md-6 col-sm-6 chartContainer">
            <h3 className="text-center blockTitle">Temperatura</h3>
            <div style={{ width: "100%", height: 200 }}>
              <Chart
                data={[
                  {
                    label: "Series 1",
                    data: [[0, 24], [1, 25], [2, 24], [3, 23], [4, 24], [5, 22]]
                  }
                ]}
              >
                <Axis primary type="time" position="bottom" />
                <Axis type="linear" position="right" />
                <Axis type="linear" position="left" />
                <Series
                  type={Line}
                  getStyles={series => ({
                    color: "red"
                  })}
                />
              </Chart>
            </div>
          </div>

          <div className="col-11 col-md-6 col-sm-6 chartContainer">
            <h3 className="text-center blockTitle">Umidade</h3>
            <div style={{ width: "100%", height: 200 }}>
              <Chart
                data={[
                  {
                    label: "Series 1",
                    data: [[0, 24], [1, 25], [2, 24], [3, 22], [4, 23]]
                  }
                ]}
              >
                <Axis primary type="time" position="bottom" />
                <Axis type="linear" position="left" />
                <Series type={Line} />
              </Chart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
