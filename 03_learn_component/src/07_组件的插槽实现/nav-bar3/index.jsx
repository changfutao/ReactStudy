import React, { Component } from 'react'

export class NavBarThree extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div>
        {leftSlot}
        {centerSlot}
        {rightSlot}
      </div>
    )
  }
}

export default NavBarThree