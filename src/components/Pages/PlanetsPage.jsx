import React, { Component } from 'react';
import Row from './../Row/Row';
import { PlanetList, PlanetDetails } from '../StarWarsComponents';

class PlanetsPage extends Component {
    state = {
        selectedItem: 2
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
                list={<PlanetList getSelectedItem={this.handleSelectedItem} />}
                details={<PlanetDetails itemId={selectedItem}/>}
            />
        );
    }
}

export default PlanetsPage;