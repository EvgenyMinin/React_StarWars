import React, { Component } from 'react';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import SwapiService from './../../services/SwapiService';
import { SwapiServiceProvider } from '../../services/SwapiServiceContext';
import { PeoplePage, PlanetsPage, StarshipsPage } from './../Pages';
import './App.scss';

class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    render() {
        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <div className="app-container">
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                </div>
            </SwapiServiceProvider>
        );
    }
}

export default App;