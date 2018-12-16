import React, { Component } from 'react'

class Tab3 extends Component {
  state = {
    users: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }

  render() {
    return (
      <div className="tab">
        <h1>Users</h1>

        <ul>
          {
            this.state.users.map(item => (
              <li key={item.id}>{item.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Tab3
