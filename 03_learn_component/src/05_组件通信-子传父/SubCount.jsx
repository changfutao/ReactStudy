import React, { Component } from 'react'

export class SubCount extends Component {
  render() {
    return (
      <div>
        <h2>SubCount</h2>
        <button onClick={ () => this.subClick(-1) }>-1</button>
        <button onClick={ () => this.subClick(-5) }>-5</button>
        <button onClick={ () => this.subClick(-10) }>-10</button>
      </div>
    )
  }
  subClick(count) {
    this.props.subCount(count)
  }
}

export default SubCount