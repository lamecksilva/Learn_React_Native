import React, { Component } from "react";
import { Chart, Axis, Series, Line } from "react-charts";
import tempImg from "../../img/termometer.png";
import umidImg from "../../img/umidade.png";
import fireImg from "../../img/fire.png";
import gasImg from "../../img/gas.png";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid main mb-3 pb-3">
        <h2 className="dashTitle mb-3">DashBoard</h2>
        <div className="row">
          <div className="col-md-2 " style={{ paddingLeft: 0 }}>
            <nav class="nav flex-column nav-block">
              <h3 className="text-center blockTitle">Sensores Disponíveis</h3>
              <a class="nav-link active mt-3" href="/">
                <span>
                  <i className="fas fa-arrow-right mr-2" />
                </span>
                Cozinha
              </a>
              <a class="nav-link" href="/">
                <span>
                  <i className="fas fa-arrow-right mr-2" />
                </span>
                Sala
              </a>
              <a class="nav-link" href="/">
                <span>
                  <i className="fas fa-arrow-right mr-2" />
                </span>
                Quarto 1
              </a>
              <a class="nav-link" href="/">
                <span>
                  <i className="fas fa-arrow-right mr-2" />
                </span>
                Quarto 2
              </a>
            </nav>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-11 col-md-2 col-sm-6 chartContainer mt-2">
                <h3 className="text-center blockTitle">Temperatura</h3>
                <div className="row">
                  <div className="col-6">
                    <img src={tempImg} alt="termometer" className="temp" />
                  </div>
                  <div className="col-6">
                    <h4 style={{ fontSize: "1.3rem" }} className="mt-5">
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
                    <h4 style={{ fontSize: "1rem" }} className="mt-5">
                      Umidade Moderada
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-11 col-md-2 col-sm-6 chartContainer mt-2">
                <h3 className="text-center blockTitle">Chamas</h3>
                <div className="row">
                  <div className="col-6">
                    <img src={fireImg} alt="Chamas" className="temp" />
                  </div>
                  <div className="col-6">
                    <h4 style={{ fontSize: "1rem" }} className="mt-5">
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
                    <h4 style={{ fontSize: "1rem" }} className="mt-5">
                      Sem gás no ar
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-11 col-md-5 col-sm-6 chartContainer">
                <h3 className="text-center blockTitle">Temperatura</h3>
                <div style={{ width: "100%", height: 200 }}>
                  <Chart
                    data={[
                      {
                        label: "Series 1",
                        data: [
                          [0, 24],
                          [1, 25],
                          [2, 24],
                          [3, 23],
                          [4, 24],
                          [5, 22]
                        ]
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
        </div>
      </div>
    );
  }
}

export default Main;
