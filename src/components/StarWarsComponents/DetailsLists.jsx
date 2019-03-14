import React from 'react';
import ItemDetails from './../ItemDetails/ItemDetails';
import { Record } from '../ItemDetails/ItemDetails';
import { SwapiServiceConsumer } from '../../services/SwapiServiceContext';

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                (swapiService) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={swapiService.getPerson}
                            getImageUrl={swapiService.getPersonImage}
                        >
                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    )
};

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    )
};

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
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
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};