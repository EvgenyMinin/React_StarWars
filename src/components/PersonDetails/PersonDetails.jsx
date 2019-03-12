import React, { Component } from 'react';
import SwapiService from './../../services/SwapiService';
import Spinner from './../Spinner/Spinner';
import './PersonDetails.scss';

class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: {},
        loading: true
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                });
            });
    }

    render() {
        const { person, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PersonView person={person}/> : null;
        
        if (!person) {
            return <span>Select a person from a list</span>
        }
        return (
            <React.Fragment>
                {spinner}
                {content}
            </React.Fragment>
        );
    }
}

export default PersonDetails;

const PersonView = ({person}) => {
    const { id, name, gender, birthYear, eyeColor } = person;
    return (
        <div className="person-details card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person pic" className="person-details__image"/>
            <div className="card-body custom-card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item custom-item">
                        <span className="list-group-item__title">Gender:</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item custom-item">
                        <span className="list-group-item__title">Birth Year:</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item custom-item">
                        <span className="list-group-item__title">Eye Color:</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}