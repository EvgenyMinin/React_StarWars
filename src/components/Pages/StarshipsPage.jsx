import React from 'react';
import { StarshipList } from '../StarWarsComponents';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({history, match}) => {
    return (
        <StarshipList
            getSelectedItem={(itemId) => history.push(itemId)}
        />
    );
};

export default withRouter(StarshipsPage);