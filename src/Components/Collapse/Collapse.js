import React, { Component } from "react";
import "../Collapse/Collapse.css";

export default class Collapse extends Component {
  render() {
    return (
      <div className="container">
        <div className="backDiv">
          <p>
            <h1>let's explore about our website</h1>
            <a
              class="btn btn-primary p-2"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              Introduction
            </a>
            <button
              class="btn btn-primary p-2 mx-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              Body of the content
            </button>
            {/* <button
              class="btn btn-primary p-2 mx-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="multiCollapseExample1 multiCollapseExample2"
            >
              Click to Read More
            </button> */}
          </p>
          <div class="row">
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body p-5 bg-success">
                  <h1>Introduction</h1>
                  Some placeholder content for the first collapse component of
                  this multi-collapse example. This panel is hidden by default
                  but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="card card-body p-5 bg-primary">
                  <h1>Here is the body</h1>
                  Some placeholder content for the second collapse component of
                  this multi-collapse example. This panel is hidden by default
                  but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
