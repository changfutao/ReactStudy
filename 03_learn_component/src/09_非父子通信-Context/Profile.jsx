import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    const { name, age } = this.props
    return (
      <div>
        <h2>Profile</h2>
        <h5>{name} = {age}</h5>
      </div>
    )
  }
}

export default Profile