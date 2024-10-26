import React, { Component } from 'react'
import Header from './c-cpns/Header'
import Main from './c-cpns/Main'
import Footer from './c-cpns/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <h2>组件嵌套</h2>
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
      </div>
    )
  }
}

export default App