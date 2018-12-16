import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Tab1 from './Tab1.js'
import Tab2 from './Tab2.js'
import Tab3 from './Tab3.js'

class Content extends Component {
  render() {
    return (
        <div className='content'>
          <Route path='/' exact component={Tab1} />
          <Route path='/tab2' component={Tab2} />
          <Route path='/tab3' component={Tab3} />
        </div>
    )
  }
}

export default Content