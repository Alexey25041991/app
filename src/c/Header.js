import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loginAction, logoutAction } from 'actions'

class Header extends Component {
  login = () => this.props.loginAction()
  logout = () => this.props.logoutAction()

  render() {
    const { isLogged } = this.props

    return (
      <div className='header'>
        {
          isLogged ? (
            <>
              <p>Hi user!</p>
              <button onClick={this.logout}>Logout</button>
            </>
          ) : (
            <>
              <p>Please login!</p>
              <button onClick={this.login}>Login</button>
            </>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.userStatus === 'authorized'
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginAction,
    logoutAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
