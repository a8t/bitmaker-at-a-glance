import React, { Component } from 'react';


class EditableText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      value: this.props.data
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.acceptInput = this.acceptInput.bind(this)
    this.rejectInput = this.rejectInput.bind(this)
    this.checkKey = this.checkKey.bind(this)
  }

  checkKey(e) {
    switch (e.key) {
      case "Enter":
        this.acceptInput()
        break;
      case "Escape":
        this.rejectInput()
        break;
      case "Tab":
        e.preventDefault();
        break;
      default:
        break;
    }
  }

  handleClick() {
    if (this.props.user){
      this.setState({ clicked: true, value: this.props.data })
      window.addEventListener("keydown", this.checkKey)
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  acceptInput() {
    this.setState({ clicked: false })
    this.props.handleDataChange(this.state.value ? this.state.value : this.props.data)
    window.removeEventListener("keydown", this.checkKey)
  }

  rejectInput() {
    this.setState({ clicked: false, value: "" })
    window.removeEventListener("keydown", this.checkKey)
  }

  render() {
    const style = {
      cursor: this.props.user ? "pointer" : "",
      backgroundColor: this.state.value.toLowerCase() === "study area" ? "lightgreen" : ""
    }
    return (
      <td onClick={this.handleClick} style={style}>
        {this.state.clicked ?
          <div className="inputbox">
            <input
              autoFocus
              type="text"
              placeholder={this.props.data}
              onBlur={this.acceptInput}
              onChange={this.handleChange}
              value={this.state.value}
            />
            <span className="hint">(Enter to save, Esc to cancel)</span>
          </div>
          :
          this.props.data
        }
      </td>
    )
  }
}

export default EditableText