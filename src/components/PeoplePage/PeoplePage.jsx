import React, { Component } from 'react';
import ItemList from './../ItemList/index';
import PersonDetails from './../PersonDetails/PersonDetails';
import './PeoplePage.scss';
import Row from './../Row/Row';
import ItemDetails from '../ItemDetails/ItemDetails';

class PeoplePage extends Component {
    state = {
        personSelected: 1
    }

    handlePersonSelected = (id) => {
        this.setState({
            personSelected: id
        });
    }

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={(i) => `${i.name}, (${i.birthYear})`}    
            />
        );
        const { personSelected } = this.state;
        const personDetails = (
            <ItemDetails personId={personSelected}/>
        );
        return (
            <Row list={itemList} details={personDetails}/>
        );
    }
}
 
export default PeoplePage;