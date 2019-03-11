import React, { Component } from 'react';
import './RandomPlanet.scss';

class RandomPlanet extends Component {
    state = {  }
    render() { 
        return (
            <div className="random-planet jumbotron rounded">
                <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="" className="random-planet__image"/>
                <div className="random-planet__info">
                    <h4>Planet Name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item custom-item">
                            <span className="list-group-item__title">Population:</span>
                            <span>1234123</span>
                        </li>
                        <li className="list-group-item custom-item">
                            <span className="list-group-item__title">Rotation Period:</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item custom-item">
                            <span className="list-group-item__title">Diametr:</span>
                            <span>100</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RandomPlanet;