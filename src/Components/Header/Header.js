import React, { Component } from 'react';
import Modal from "./Login/Modal";
import { CSSTransitionGroup } from "react-transition-group"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {displayLogin: false}
    this.toggleLoginModal = this.toggleLoginModal.bind(this)
  }

  componentWillReceiveProps(newProps){
    if (newProps.user) this.setState({displayLogin: false})
  }
  
  toggleLoginModal() {
    this.setState({
      displayLogin: !this.state.displayLogin
    })
  }

  render() {
    
    return (
      <div className="header">

        <img className='logo' src={require("../../logo.png")} alt="General Assembly Logo"/>

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
            ? <Modal
                toggleLoginModal={this.toggleLoginModal} 
                key="loginarea" 
                login={this.props.login} 
                logout={this.props.logout} 
                wrongLogin={this.props.wrongLogin}
                removeWrongLogin={this.props.removeWrongLogin}
              />
            : <span key="span" />
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Header