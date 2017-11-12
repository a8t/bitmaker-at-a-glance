import React, { Component } from 'react';
import Login from "./Login";
import { CSSTransitionGroup } from "react-transition-group"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {displayLogin: false}
    this.toggleLoginModal = this.toggleLoginModal.bind(this)
  }
  
  toggleLoginModal() {
    this.setState({
      displayLogin: !this.state.displayLogin
    })
  }

  render() {
    console.log(this.props.user);
    
    return (
      <div className="header">
        <h1>Bitmaker At A Glance</h1>
        {this.props.user
          ? <button onClick={this.props.logout}>Log Out</button>
          : <button onClick={(e) => { e.target.blur(); this.toggleLoginModal() }}> Staff login </button>
        }
        
        <CSSTransitionGroup
          transitionName="loginTransition"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          {this.state.displayLogin
            ? <Login toggleLoginModal={this.toggleLoginModal} key="loginarea" login={this.props.login} logout={this.props.logout}/>
            : <span key="span" />
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Header