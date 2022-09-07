import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div className="container my-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

// these are just the pratice for the 

// function Car(props){
//   return (
//     <h1>hello i am {props.color} Car</h1>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render = (<car color = "blue" />)

