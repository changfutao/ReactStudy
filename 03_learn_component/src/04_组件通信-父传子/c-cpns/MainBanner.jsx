import React, { Component } from 'react'
// prop-types 库 
import PropTypes from 'prop-types';
export class MainBanner extends Component {
  render() {
    const { banners, title } = this.props
    return (
      <div>
        <h2>{title}</h2>
        {
            banners.map(item => (
                <div key={item.acm}>{ item.title }</div>
            ))
        }
      </div>
    )
  }
}
// MainBanner传入的props类型进行验证
MainBanner.propTypes = {
    banners: PropTypes.array.isRequired,
    title: PropTypes.string
}
// MainBanner传入的props的默认值
MainBanner.defaultProps = {
    title: '轮播图'
}
export default MainBanner