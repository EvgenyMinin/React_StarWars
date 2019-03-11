import React from 'react';
import './PersonDetails.scss';

const PersonDetails = () => {
    return (
        <div className="person-details card">
            <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="" className="person-details__image"/>
            <div className="card-body custom-card-body">
                <h4>R2-D2</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item custom-item">
                        <span className="list-group-item__title">Gender:</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item custom-item">
                        <span className="list-group-item__title">Birth Year:</span>
                        <span>43</span>
                    </li>
                    <li className="list-group-item custom-item">
                        <span className="list-group-item__title">Eye Color:</span>
                        <span>red</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default PersonDetails;