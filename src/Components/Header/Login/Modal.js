import React, { Component } from "react";
import "./Modal.css";
import { Login, ForgotPassword }  from './Forms/Forms'

class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      forgot: false
    }
    this.windowListen = e => { if (e.key === "Escape") this.props.toggleLogin() }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleForgot = this.toggleForgot.bind(this)
  }


  componentWillMount() {
    window.addEventListener("keydown", this.windowListen)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.windowListen)
  }

  toggleForgot(){
    this.setState({ forgot: !this.state.forgot, password: "" })
  }

  handleChange(e){
    const target = e.target
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.removeWrongLogin()
    this.props.login(this.state.email, this.state.password)
    this.setState({ password: "" })
  }


  render() {
    return (

      <div
        key="login"
        className="loginScreen"
        onClick={() => this.props.toggleLoginModal()}
      >

        <div id="modal" className="modalContainer" onClick={(e) => e.stopPropagation()}>

          <button className="closeForm" onClick={() => this.props.toggleLoginModal()}>
            X
          </button>

          {!this.state.forgot
            ? <Login
                email={this.state.email}
                password={this.state.password}
                wrongLogin={this.props.wrongLogin}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                toggleForgot={this.toggleForgot}
              />
            : <ForgotPassword
                email={this.state.email}
                handleChange={this.handleChange}
              toggleForgot={this.toggleForgot}
                
              />
          }
          
            
            
        </div>
      </div>
    )
  }
}

export default Modal
