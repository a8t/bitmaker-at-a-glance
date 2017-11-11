import React, {Component} from 'react';


class EditableText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.acceptInput = this.acceptInput.bind(this)
        this.checkKey = this.checkKey.bind(this)
    }

    checkKey (e) {
        if (e.key === "Escape" || e.key === "Enter") this.acceptInput()
    }

    handleClick() {
        this.setState({ clicked: true})
        window.addEventListener("keydown", this.checkKey)
    }

    acceptInput(){
        this.setState({ clicked: false})
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
                    /> 
                :
                    this.props.data                
                }
            </td>
        )
    }
}

export default EditableText