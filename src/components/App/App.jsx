import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import SwapiService from './../../services/SwapiService';
import { SwapiServiceProvider } from '../../services/SwapiServiceContext';
import { PeoplePage, PlanetsPage, StarshipsPage } from './../Pages';
import './App.scss';
import { StarshipDetails } from '../StarWarsComponents';

class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    render() {
        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <BrowserRouter>
                    <div className="app-container">
                        <Header />
                        <RandomPlanet />
                        <Route path="/" exact render={() => <h2 className="app-container__main">Welcome to StarWars application</h2>} />
                        <Route path='/people/:id?' component={PeoplePage} />
                        <Route path='/planets' component={PlanetsPage} />
                        <Route path='/starships' exact component={StarshipsPage} />
                        <Route path='/starships/:id'
                            render={({ match }) => {
                                const { id } = match.params;
                                return <StarshipDetails itemId={id}/>
                            }}
                        />
                    </div>
                </BrowserRouter>
            </SwapiServiceProvider>
        );
    }
}

export default App;