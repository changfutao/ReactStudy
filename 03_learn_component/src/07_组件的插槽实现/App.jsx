import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBarTwo from './nav-bar2';
import NavBarThree from './nav-bar3';

export class App extends Component {
  render() {
    return (
      <div>
        {/* 方式一 children, 如果传多个 则子组件通过this.props.children[index];如果传一个,则不是数组是一个对象 */}
        <NavBar>
            <span>我是左侧</span>
            <h5>我是中间</h5>
            <i>我是右侧</i>
        </NavBar>
        <NavBarTwo>
            <h2>我是children</h2>
        </NavBarTwo>
        {/* 方式二: 通过props传递 */}
        <NavBarThree leftSlot={<span>我是左侧1</span>} centerSlot={<h5>我是中间1</h5>} rightSlot={<i>我是右侧1</i>}  />
      </div>
    )
  }
}

export default App