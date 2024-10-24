import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React",
    };
  }
  render() {
    // 1.react元素: 通过jsx编写的代码就会被编译成React.createElement, 所以返回的就是一个React元素
    const { message } = this.state;
    return <div>{message}</div>;
  }
}

export default App;
