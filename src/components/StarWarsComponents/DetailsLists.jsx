import React from 'react';
import SwapiService from './../../services/SwapiService';
import ItemDetails from './../ItemDetails/ItemDetails';
import { Record } from '../ItemDetails/ItemDetails';

const swapiService = new SwapiService();
const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = swapiService;

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field="population" label="Poopulation" />
            <Record field="climate" label="Climate" />
            <Record field="rotaionPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails
                itemId={itemId}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="crew" label="Crew" />
            </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};