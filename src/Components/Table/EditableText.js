import React, {Component} from 'react';


class EditableText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            value: ""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.acceptInput = this.acceptInput.bind(this)
        this.checkKey = this.checkKey.bind(this)
    }

    checkKey(e) {
        if (e.key === "Escape" || e.key === "Enter") this.acceptInput()
    }

    handleClick() {
        this.setState({ clicked: true})
        window.addEventListener("keydown", this.checkKey)
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    acceptInput(){
        this.setState({ clicked: false})
        this.props.handleDataChange(this.state.value ? this.state.value : this.props.data)
        window.removeEventListener("keydown",this.checkKey)
    }
    
    render () {
        return (
            <td onClick={this.handleClick}> 
                {this.state.clicked ? 
                    <input 
                        autoFocus
                        type="text" 
                        placeholder={this.props.data}
                        onBlur={this.acceptInput}
                        onChange={this.handleChange}
                        value={this.state.value}
                    /> 
                :
                    this.props.data                
                }
            </td>
        )
    }
}

export default EditableText