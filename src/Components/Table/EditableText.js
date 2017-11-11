import React, {Component} from 'react';


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
        if (e.key === "Enter") {
            this.acceptInput()
        } else if (e.key === "Escape") {
            this.rejectInput()
        }
    }

    handleClick() {
        this.setState({ clicked: true, value: this.props.data})
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

    rejectInput(){
        this.setState({ clicked: false, value: "" })
        window.removeEventListener("keydown", this.checkKey)        
    }
    
    render () {
        const style = {
            cursor: "pointer",
            backgroundColor: this.state.value.toLowerCase() === "study area" ? "lightgreen" : ""
        }
        return (
            <td onClick={this.handleClick} style={style}> 
                {this.state.clicked ? 
                    <div class="inputbox">
                        <input
                            autoFocus
                            type="text"
                            placeholder={this.props.data}
                            onBlur={this.rejectInput}
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                        <span class="hint">(Enter to save, Esc to cancel)</span>
                    </div> 
                :
                    this.props.data                
                }
            </td>
        )
    }
}

export default EditableText