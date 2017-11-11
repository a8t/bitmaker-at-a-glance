import React, { Component } from 'react';
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                room201: {
                    monday: "",
                    tuesday: "",
                    wednesday: "",
                    thursday: "",
                    friday: ""
                },
                room202: {
                    monday: "",
                    tuesday: "",
                    wednesday: "",
                    thursday: "",
                    friday: ""
                },
                room203: {
                    monday: "",
                    tuesday: "",
                    wednesday: "",
                    thursday: "",
                    friday: ""
                },
                room301: {
                    monday: "",
                    tuesday: "",
                    wednesday: "" ,
                    thursday: "",
                    friday: ""
                }
            }
        }
        this.handleDataChange = this.handleDataChange.bind(this)
    }

    handleDataChange(room, day, newValue) {
        console.log(room, day, newValue);
        
        
        this.setState({
            data: {
                ...this.state.data, 
                [room]: {
                    ...this.state.data[room],
                    [day]: newValue
                }
            }
        })
    }

    render() {
        console.log(this.state.data.room201);
        
        
        return (
            <div className="App">
                <Header />
                <Table data={this.state.data} handleDataChange={this.handleDataChange} />
            </div>
        );
    }
}

export default App;
