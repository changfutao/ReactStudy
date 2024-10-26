import React, { Component } from 'react'
import HomeBanner from './HomeBanner'
import {UserContext} from './context/user-context';
export class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <UserContext.Consumer>
            {
                value => (
                    <div>{value.name}-{value.age}</div>
                )
            }
        </UserContext.Consumer>
        <HomeBanner />
      </div>
    )
  }
}

export default Home