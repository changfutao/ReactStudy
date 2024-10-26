import React, { Component } from 'react'
import Home from './Home'

export class App extends Component {
    constructor() {
        super()
        this.state ={
            books: ['aaa', 'bbb', 'ccc']
        }
    }
  render() {
    const { books } = this.state
    return (
      <div>
        <Home books={books} changeColor={(item) => this.changeBookColor(item)} />
      </div>
    )
  }
  changeBookColor(item) {
    if(item === 'bbb') {
        return 'bbb牛逼'
    }
    return item
  }
}

export default App