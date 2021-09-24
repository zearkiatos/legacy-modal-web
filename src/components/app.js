import React, { Component } from "react";
import Modal from "./Modal";
import Colors from "./Colors";
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <h1>Hello</h1>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <h4>Hello</h4>
          <h5>Hello</h5>
          <h6>Hello</h6>
        </div>
        <div className="right">
          <h1>Hello</h1>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <h4>Hello</h4>
          <h5>Hello</h5>
          <h6>Hello</h6>
          <div>
            <Modal>
              <h1>A really long amount of Modal Content</h1>
              <p>Etc.</p>
              <Colors />
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
