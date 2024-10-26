import React, { Component } from 'react'
import {ThemeContext} from './context/theme-context';

export class HomeBanner extends Component {
  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <h5 style={ this.context }>哈哈</h5>
      </div>
    )
  }
}
// 方式一: 类名.contextType = Context , this.context
HomeBanner.contextType = ThemeContext

export default HomeBanner