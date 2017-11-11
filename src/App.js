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
                    monday: "Meet Your Makers",
                    tuesday: "Front End Dev",
                    wednesday: "Digital Marketing",
                    thursday: "Study Area",
                    friday: "Etc"
                },
                room202: {
                    monday: "Digital Marketing",
                    tuesday: "Front End Dev",
                    wednesday: "Digital Marketing",
                    thursday: "Study Area",
                    friday: "Etc"
                },
                room203: {
                    monday: "Digital Marketing",
                    tuesday: "Front End Dev",
                    wednesday: "Digital Marketing",
                    thursday: "Study Area",
                    friday: "Etc"
                },
                room301: {
                    monday: "Digital Marketing",
                    tuesday: "Front End Dev",
                    wednesday: "Digital Marketing",
                    thursday: "Study Area",
                    friday: "Etc"
                }
            }
        }
    }
 
    handleDataChange() {

    }

    render() {
        return (
            <div className="App">
                <Header />
                <Table data={this.state.data} />
            </div>
        );
    }
}

export default App;
