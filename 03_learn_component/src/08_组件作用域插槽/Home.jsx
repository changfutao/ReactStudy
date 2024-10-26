import React, { Component } from 'react'

export class Home extends Component {
  render() {
    const { books, changeColor } = this.props
    return (
      <div>
        {
            books.map(item => (
                <div key={item}>{changeColor(item)}</div>
            ))
        }
      </div>
    )
  }
}

export default Home