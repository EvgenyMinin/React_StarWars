import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwapiService from './../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './RandomPlanet.scss';

class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 5000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    }
    
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*20) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }


    render() {
        const { planet, loading, error } = this.state;
        const errorMessage = error ? <ErrorMessage /> : null;
        const hasData = !(loading || error);
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
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
                        <span className="list-group-item__title">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}