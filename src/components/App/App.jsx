import React, { Component } from 'react';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ItemList from './../ItemList';
import PersonDetails from './../PersonDetails';
import './App.scss';

class App extends Component {
    state = {  }
    render() {
        return (
            <div className="app-container">
                <Header />
                <RandomPlanet />
                <div className="row">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;