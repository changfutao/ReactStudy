import React, { Component } from 'react'
import TabControl from './TabControl/TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state ={
        titles : ['流行', '潮流', '新鲜'],
        index: 0
    }
  }
  render() {
    const { titles, index } = this.state
    return (
      <div>
        <TabControl titles={titles} changeIndex={ (index) => this.changeIndex(index) } />
        <div>{titles[index]}</div>
      </div>
    )
  }
  changeIndex(index) {
    this.setState({
        index
    })
  }
}

export default App