import React, { Component } from 'react';
import ItemList from './../ItemList/index';
import PersonDetails from './../PersonDetails/PersonDetails';
import './PeoplePage.scss';

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
        const { personSelected } = this.state;
        return (
            <div className="row">
                <div className="col-md-6">
                    <ItemList onPersonSelected={this.handlePersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={personSelected} />
                </div>
            </div>
        );
    }
}
 
export default PeoplePage;