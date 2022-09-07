import React, { Component } from "react";

export default class Collapse extends Component {
  render() {
    return (
      <div className="container">
        <p>
          <h1>
            Wanna read more about our website let's Click on the button to know
            more about us
          </h1>
          <a
            class="btn btn-primary p-2"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Click to Read More
          </a>
          <button
            class="btn btn-primary p-2 mx-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Click to Read More
          </button>
          <button
            class="btn btn-primary p-2 mx-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapseExample1 multiCollapseExample2"
          >
            Click to Read More
          </button>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body p-5 bg-success">
                <h1>Introduction</h1>
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body p-5 bg-primary">
                <h1>Here is body</h1>
                Some placeholder content for the second collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
