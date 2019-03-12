import React, { Component } from 'react';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ItemList from './../ItemList';
import PersonDetails from './../PersonDetails';
import './App.scss';

class App extends Component {
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
            <div className="app-container">
                <Header />
                <RandomPlanet />
                <div className="row">
                    <div className="col-md-6">
                        <ItemList onPersonSelected={this.handlePersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={personSelected} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;