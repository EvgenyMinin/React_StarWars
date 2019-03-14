import React, { Component } from 'react';
import { PersonList, PersonDetails } from '../StarWarsComponents';
import Row from './../Row/index';

class PeoplePage extends Component {
    state = {
        selectedItem: 1
    };

    handleSelectedItem = (selectedItem) => {
        this.setState({
            selectedItem
        });
    };

    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                list={<PersonList getSelectedItem={this.handleSelectedItem}/>}
                details={<PersonDetails itemId={selectedItem}/>}
            />
        );
    }
}

export default PeoplePage;