import React, { Component } from 'react';
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                room201: [
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers"
                ],
                room202: [
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers"
                ],
                room203: [
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers"
                ],
                room301: [
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers",
                    "Meet Your Makers"
                ]
            }
        }
        this.handleDataChange = this.handleDataChange.bind(this)
    }

    // async componentDidMount(){
    //     await fetch
    // }

    handleDataChange(room, index, newValue) {
        this.setState(prevState => {
            return {
                data: {
                    ...prevState.data, 
                    [room]: [
                        ...prevState.data[room].slice(0,index),
                        newValue,
                        ...prevState.data[room].slice(index+1),
                        
                    ]
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
