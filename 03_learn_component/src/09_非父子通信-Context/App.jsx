import React, { Component } from 'react'
import Home from './Home'
import {ThemeContext} from './context/theme-context';
import {UserContext} from './context/user-context';
import Profile from './Profile';

export class App extends Component {
  constructor() {
    super()
    this.state ={
        info: {
            name: '张三',
            age: 30
        }
    }
  }
  render() {
    const { info } = this.state
    return (
      <div>
        <h2>App</h2>
        <ThemeContext.Provider value={{color: 'red', fontSize: 20}}>
            <UserContext.Provider value={{ name: '张三', age: 30 }}>
                 <Home />
            </UserContext.Provider>
        </ThemeContext.Provider>
        {/* 下面可以传递遍历对象每一个key value, 相当于 name={name} age={age} */}
        <Profile {...info} />
      </div>
    )
  }
}

export default App