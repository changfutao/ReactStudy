import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div className="container">
        {
            this.props.children[0]
        }
        {
            this.props.children[1]
        }
        {
            this.props.children[2]
        }
      </div>
    )
  }
}

export default NavBar