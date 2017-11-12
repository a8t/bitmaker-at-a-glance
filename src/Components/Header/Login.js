import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",

    }
    this.windowListen = e => { if (e.key === "Escape") this.props.toggleLogin() }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentWillMount() {
    window.addEventListener("keydown", this.windowListen)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.windowListen)
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
    this.setState({password: ""})
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

          <form className="popupForm" onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              className="block form input" 
              placeholder="email" 
              required 
              value={this.state.email} 
              name="email"
              onChange={this.handleChange}
              
            />
            <input 
              type="password" 
              className="block form input" 
              placeholder="password" 
              required 
              value={this.state.password} 
              name="password"
              onChange={this.handleChange}
            />

            {this.props.wrongLogin ? <span id="wrong">Wrong username or password!</span> : ""}

            <div className="rememberMe">
              <input type="checkbox" className="form" id="remember" />
              <label className="form" htmlFor="remember">Remember me on this computer</label>
            </div>
            <button className="block form" type="submit" id="loginSubmit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
