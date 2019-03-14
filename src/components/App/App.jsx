import React, { Component } from 'react';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ItemDetails, { Record } from './../ItemDetails/ItemDetails';
import SwapiService from './../../services/SwapiService';
import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from '../StarWarsComponents';
import { SwapiServiceProvider } from '../../services/SwapiServiceContext';
import './App.scss';

class App extends Component {

    swapiService = new SwapiService();
    state = {  }

    render() {
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <div className="app-container">
                    <Header />
                    <RandomPlanet />

                    <PersonDetails itemId={11}/>
                    <PlanetDetails itemId={5}/>
                    <StarshipDetails itemId={9}/>

                    <PersonList />

                    <PlanetList />

                    <StarshipList />

                </div>
            </SwapiServiceProvider>
        );
    }
}

export default App;