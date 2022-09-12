import React, { Component } from "react";

export default class Progress extends Component {
  render() {
    // const style = {
    //   width: '25%'
    // }
    // const style1 = {
    //   width: '50%'
    // }
    // const style2 = {
    //   width: '100%'
    // }
    return (
      <div className="container">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-label="Success example"
            // style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-label="Info example"
            // style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-label="Warning example"
            // style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            aria-label="Danger example"
            // style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
}
