import React, { Component } from 'react'
import './style.css';

export class TabControl extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }
  render() {
    const { titles, changeIndex } = this.props
    const { currentIndex } = this.state
    return (
      <div className="container">
        {
            titles.map((item, index) => (
                <div className={`item ${currentIndex === index ? 'active' : ''}`} key={item} onClick={e => this.tabClick(index)}>
                    <span className="text">{item}</span>
                </div>
            ))
        }
      </div>
    )
  }
  tabClick(index) {
    this.props.changeIndex(index)
    this.setState({
        currentIndex: index
    })
  }
}

export default TabControl