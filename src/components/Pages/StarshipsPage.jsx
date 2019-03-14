import React, { Component } from 'react';
import Row from './../Row/index';
import { StarshipList, StarshipDetails } from '../StarWarsComponents';

class StarshipsPage extends Component {
    state = {
        selectedItem: 5
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
                list={<StarshipList getSelectedItem={this.handleSelectedItem} />}
                details={<StarshipDetails itemId={selectedItem}/>}
            />
        );
    }
}

export default StarshipsPage;