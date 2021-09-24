import React, { Component } from "react";
import BadModal from "./BadModal";
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
            <BadModal>
              <h1>A really long amount of Modal Content</h1>
              <p>Etc.</p>
              <Colors />
            </BadModal>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
