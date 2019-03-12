import React, { Component } from 'react';
import SwapiService from './../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import './RandomPlanet.scss';

class RandomPlanet extends Component {

    constructor() {
        super();
        this.updatePlanet();
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*20) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
            </div>
        );
    }
}

export default RandomPlanet;

const PlanetView = ({planet}) => {
    const { id, planetName, population, climate, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}