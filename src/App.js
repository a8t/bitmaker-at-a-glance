import React, { Component } from 'react';
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import firebase from "./firebase";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        room201: [
          "",
          "",
          "",
          "",
          ""
        ],
        room202: [
          "",
          "",
          "",
          "",
          ""
        ],
        room203: [
          "",
          "",
          "",
          "",
          ""
        ],
        room301: [
          "",
          "",
          "",
          "",
          ""
        ]
      }
    }
    this.handleDataChange = this.handleDataChange.bind(this)
  }

  async componentDidMount(){
    const url = "https://bitmaker-at-a.firebaseio.com/data.json"
    const response = await fetch(url)
    const jsonResponse = await response.json()
    this.setState({data: jsonResponse}) 
    
    
  }

  handleDataChange(room, index, newValue) {
    this.setState(prevState => {
      const newState = {
        data: {
          ...prevState.data,
          [room]: [
            ...prevState.data[room].slice(0, index),
            newValue,
            ...prevState.data[room].slice(index + 1),

          ]
        }
      }

      firebase.database().ref("data").set(newState.data)

      return newState
    })
  }



  render() {

    console.log(this.state);
    
    return (
      <div className="App">
        <Header />
        <Table data={this.state.data} handleDataChange={this.handleDataChange} />
      </div>
    );
  }
}

export default App;
