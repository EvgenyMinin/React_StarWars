import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonList, PersonDetails } from '../StarWarsComponents';
import Row from './../Row/index';

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;
    
    return (
        <Row
            list={<PersonList getSelectedItem={(itemId) => history.push(itemId)}/>}
            details={<PersonDetails itemId={id}/>}
        />
    );
};

export default withRouter(PeoplePage);