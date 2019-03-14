import React, { Component } from 'react';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ItemDetails, { Record } from './../ItemDetails/ItemDetails';
import Row from './../Row/Row';
import SwapiService from './../../services/SwapiService';
import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from '../StarWarsComponents';
import './App.scss';

class App extends Component {

    swapiService = new SwapiService();
    state = {  }

    render() {
        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;
        const personDetails = (
            <ItemDetails
                itemId={10}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="crew" label="Crew" />
            </ItemDetails>
        );
        return (
            <div className="app-container">
                <Header />
                <RandomPlanet />

                <PersonDetails itemId={11}/>
                <PlanetDetails itemId={5}/>
                <StarshipDetails itemId={9}/>

                <PersonList />

                <PlanetList />

                <StarshipList />

                <Row 
                    list={personDetails}
                    details={starshipDetails}
                />

            </div>
        );
    }
}

export default App;