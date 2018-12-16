import React, { Component } from 'react'
import { Router } from 'react-router-dom'

import Sidebar from 'c/Sidebar'
import Header from 'c/Header'
import Content from 'c/Content'

import history from 'history.js'

class App extends Component {
  render() {
    return (
      <div className='cont'>
        <Router history={history}>
          <div className='app-wrapper'>
            <Sidebar />

            <div className='main'>
              <Header />
              <Content />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
