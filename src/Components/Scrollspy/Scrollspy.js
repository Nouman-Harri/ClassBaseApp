import React, { Component } from "react";

export default class Scrollspy extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div id="list-example" className="list-group">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                Item 1
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                Item 2
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                Item 3
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-4"
              >
                Item 4
              </a>
            </div>
          </div>
          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabindex="0"
            >
              <h4 id="list-item-1">Item 1</h4>
              <p>
                Paragraph Writing: A sequence of sentences representing an idea
                or explaining a topic in the most organized fashion is called a
                paragraph. Paragraph writing pertains to a single issue at a
                time. All matter relevant to the topic has to be clearly.
              </p>
              <h4 id="list-item-2">Item 2</h4>
              <p>
                The main ingredients in articulating a pleasant paragraph are
                integrating ideas, consistency of language, brief and
                straightforward introduction through a topical sentence,
                organization of ideas in an orderly fashion in the. especially
                for school students.
              </p>
              <h4 id="list-item-3">Item 3</h4>
              <p>
                The last line wraps up the paragraph by presenting a neat
                conclusion to the subject in discussion. The last line can also
                give the reader room for more thoughts and ideas for further
                thinking on the topic. This is the most basic representation of
                a paragraph. However,.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
