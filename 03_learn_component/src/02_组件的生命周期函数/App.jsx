import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <h2>生命周期</h2>
        <button onClick={(e) => this.show()}>显示/隐藏</button>
        {isShow && <HelloWorld />}
      </div>
    );
  }
  show() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
}

export default App;
