import React, { Component } from 'react';
import SwapiService from './../../services/SwapiService';
import Spinner from './../Spinner/index';
import './ItemList.scss';

class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: []
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            });
    }

    renderPeople(people) {
        return people.map(({id, name}) => {
            return (
                <li
                    className="list-group-item custom-li-group"
                    key={id}
                    onClick={() => this.props.onPersonSelected(id)}
                >
                    {name}
                </li>
            );
        });
    }

    render() {
        const { peopleList } = this.state;
        const people = this.renderPeople(peopleList);
        if (!peopleList) {
            return <Spinner />;
        }
        return (
            <ul className="item-list list-group">
                {people}
            </ul>
        );
    }
}
 
export default ItemList;