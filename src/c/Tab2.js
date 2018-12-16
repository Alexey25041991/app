import React, { Component } from 'react'

class Tab2 extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <div className="tab">
        <h1>Posts</h1>

        <ul>
          {
            this.state.posts.map(item => (
              <li key={item.id}>{item.title}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Tab2
