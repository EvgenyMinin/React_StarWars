import React, { Component } from 'react';
import './ItemList.scss';

class ItemList extends Component {
    state = {  }
    render() { 
        return (
            <ul className="item-list list-group">
                <li className="list-group-item custom-li-group">
                    Luke Skywalker
                </li>
                <li className="list-group-item custom-li-group">
                    Darth Vader
                </li>
                <li className="list-group-item custom-li-group">
                    R2-D2
                </li>
            </ul>
        );
    }
}
 
export default ItemList;