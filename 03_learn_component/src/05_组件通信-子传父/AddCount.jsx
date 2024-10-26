import React, { Component } from 'react'

export class AddCount extends Component {
  render() {
    return (
      <div>
        <h2>AddCount</h2>
        <button onClick={ () => this.addClick(1) }>+1</button>
        <button onClick={ () => this.addClick(5) }>+5</button>
        <button onClick={ () => this.addClick(10) }>+10</button>
      </div>
    )
  }
  addClick(count) {
    this.props.addCount(count)
  }
}

export default AddCount