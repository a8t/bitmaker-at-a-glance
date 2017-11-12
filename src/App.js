import React, { Component } from 'react';
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import firebase from "./firebase";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
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
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  async componentDidMount(){
    const url = "https://bitmaker-at-a.firebaseio.com/data.json"
    const response = await fetch(url)
    const jsonResponse = await response.json()

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: true, data: jsonResponse });
      } else {
        this.setState({ data: jsonResponse }) 
      }
    })

  }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        
        const user = result.email;
        this.setState({
          user: user
        });
      }).catch(function (error) {
        console.log(error);
        
      });

  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          user: null
        });
      }).catch(function (error) {
        console.log(error);

      });
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
    return (
      <div className="App">
        <Header login={this.login} logout={this.logout} user={this.state.user}/>
        <Table data={this.state.data} handleDataChange={this.handleDataChange} user={this.state.user}/>
      </div>
    );
  }
}

export default App;
