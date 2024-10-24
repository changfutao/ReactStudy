import React, { Component } from "react";

class HelloWorld extends Component {
  // 挂载步骤一: 执行constructor
  constructor() {
    console.log("constructor execute");
    super();
    this.state = {
      message: "Hello World",
    };
  }
  // 挂载步骤二: 执行render
  // 更改数据步骤一: 执行render
  render() {
    console.log("render execute");
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeText()}>change text</button>
      </div>
    );
  }
  changeText() {
    // 更改数据
    this.setState({
      message: "Hello React",
    });
  }
  // 挂载步骤三: 组件被渲染到DOM: 被挂载到DOM
  componentDidMount() {
    console.log("componentDidMount execute");
  }
  // 更新数据步骤二: 组件的DOM被更新完成: DOM发生更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }
  // 组件从DOM中被卸载掉: 从DOM移除掉
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  // 返回true则执行render函数, 返回false则不执行render
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return {
      msg: "aaa",
    };
  }
}

export default HelloWorld;
