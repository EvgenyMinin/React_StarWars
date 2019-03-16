import React from 'react';
import { StarshipList } from '../StarWarsComponents';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({history}) => {
    return (
        <StarshipList getSelectedItem={(itemId) => {
            history.push(`/starships/${itemId}`);
        }} />
    );
};

export default withRouter(StarshipsPage);