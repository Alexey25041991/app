import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link to='/'><button className='sidebar-item'>Tab 1</button></Link>
        <Link to='/tab2'><button className='sidebar-item'>Tab 2</button></Link>
        <Link to='/tab3'><button className='sidebar-item'>Tab 3</button></Link>
      </div>
    )
  }
}

export default Sidebar
