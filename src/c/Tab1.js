import React, { Component } from 'react'

class Tab1 extends Component {
  state = {
    albums: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => this.setState({ albums }))
  }

  render() {
    return (
      <div className="tab">
        <h1>Albums</h1>

        <ul>
          {
            this.state.albums.map(item => (
              <li key={item.id}>{item.title}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Tab1
