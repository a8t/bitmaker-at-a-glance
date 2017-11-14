import React, { Component } from 'react';
import firebase from "../../../../firebase";



export const Login = props => {

  return (
    <form className="popupForm" onSubmit={props.handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        className="block form input"
        placeholder="email"
        required
        value={props.email}
        name="email"
        onChange={props.handleChange}

      />
      <input
        type="password"
        className="block form input"
        placeholder="password"
        required
        value={props.password}
        name="password"
        onChange={props.handleChange}
      />

      {props.wrongLogin ? <span id="wrong">Wrong username or password!</span> : ""}

      <div className="rememberMe">
        <input type="checkbox" className="form" id="remember" />
        <label className="form" htmlFor="remember">Remember me on this computer</label>
      </div>

      <button className="block form" type="submit" id="loginSubmit">Submit</button>
      <button className="block form" id="resetPassword" onClick={props.toggleForgot}>
        Reset
      </button>
    </form>
  )
}

export class ForgotPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resetSent: false,
      error: false
    }
    this.reset = this.reset.bind(this)
  }
  

  reset(email){
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => this.setState({ resetSent: true }))
      .catch((e) => {
        this.setState({ error: true })
        console.log(e);
      });
  }

  render() {
    return (
      <form className="popupForm" onSubmit={e => {
        e.preventDefault()
        this.reset(this.props.email)
      }}>
        <h2>Password reset</h2>
      
        <input
          type="text"
          className="block form input"
          placeholder="email"
          required
          value={this.props.email}
          name="email"
          onChange={this.props.handleChange}

        />

        <button className="block form" type="submit" id="loginSubmit">Submit</button>
        <button className="block form" id="resetPassword" onClick={this.props.toggleForgot}>
          Back
        </button>

        {this.state.resetSent ? "Check your email!" : ""}
        {this.state.error ? "Something went wrong." : ""}
      </form>
    )
  }
}
