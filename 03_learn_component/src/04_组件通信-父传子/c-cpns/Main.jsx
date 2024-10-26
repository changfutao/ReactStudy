import React, { Component } from 'react'
import MainBanner from './MainBanner'
import axios from 'axios';

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: [],
      title: '666'
    }
  }
  render() {
    const { banners, title } = this.state
    return (
      <div>
        <h2>Main</h2>
        <MainBanner banners={banners} title={title} />
      </div>
    )
  }
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      this.setState({
        banners
      })
    })
  }
}

export default Main