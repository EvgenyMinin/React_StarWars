import React, { Component } from 'react';
import SwapiService from './../../services/SwapiService';
import './RandomPlanet.scss';

class RandomPlanet extends Component {

    constructor() {
        super();
        this.updatePlanet();
    };

    swapiService = new SwapiService();

    state = {
        id: null,
        planetName: null,
        population: null,
        climate: null,
        rotationPeriod: null,
        diameter: null
    };

    updatePlanet() {
        const id = Math.floor(Math.random()*20) + 2;
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    planetName: planet.name,
                    population: planet.population,
                    climate: planet.climate,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                });
            });
    }

    render() {
        const { id, planetName, population, climate, rotationPeriod, diameter } = this.state;
        return (
            <div className="random-planet jumbotron rounded">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="random-planet__image"/>
                <div className="random-planet__info">
                    <h4>{planetName}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item custom-item">
                            <span className="list-group-item__title">Population:</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item custom-item">
                            <span className="list-group-item__title">Climate:</span>
                            <span>{climate}</span>
                        </li>
                        <li className="list-group-item custom-item">
                            <span className="list-group-item__title">Rotation Period:</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item custom-item">
                            <span className="list-group-item__title">Diametr:</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RandomPlanet;