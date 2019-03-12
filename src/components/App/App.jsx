import React, { Component } from 'react';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import './App.scss';

class App extends Component {
    state = {  }

    render() {
        return (
            <div className="app-container">
                <Header />
                <RandomPlanet />
                <PeoplePage />
            </div>
        );
    }
}

export default App;