import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../HocHelper';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="population" label="Poopulation" />
            <Record field="climate" label="Climate" />
            <Record field="rotaionPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);