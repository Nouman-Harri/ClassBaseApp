import React, { Component } from "react";
import "../Home/Home.css"
// import "../Components/Main.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="card-group">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOUpRK4aA3-yS0EHJfAcUV5ALMLEi3dhziklNOpowImyg1Xk_2bFOdSG0copvqCokaSE&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                {/* <button className="open-button" onClick="openForm()">
                  Chat
                </button> */}
{/* 
                <div className="chat-popup" id="myForm">
                  <form action="/action_page.php" className="form-container">
                    <h1>Chat</h1>

                    <label for="msg">
                     <button className="open-button" onclick="openForm()"> <b>Message</b></button>
                    </label>
                    <textarea
                      placeholder="Type message.."
                      name="msg"
                      required
                    ></textarea>

                    <button type="submit" className="btn">
                      Send
                    </button>
                    <button
                      type="button"
                      className="btn cancel"
                      onclick="closeForm()"
                    >
                      Close
                    </button>
                  </form>
                </div> */}

                <small className="text-muted">
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    Messages
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6nc9a3R2l6klFmzcbA-fO1dIzV-30OMcOAPMA-EVZqBCYVNCH1BKiLTjdIyHZl4G3aE&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content. This content is a little bit longer. This
                content is a little bit.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    Messages
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      10+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ulPhovWcc1x-eitIFjqJg3EjD5vuFhErRg&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first .
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    Messages
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      200+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
