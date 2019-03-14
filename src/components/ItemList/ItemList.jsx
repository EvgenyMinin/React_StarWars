import React from 'react';
import './ItemList.scss';

const ItemList = (props) => {
    const { data, getSelectedItem, children: renderLabel } = props;
    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);
        return (
            <li
                className="list-group-item custom-li-group"
                key={id}
                onClick={() => getSelectedItem(id)}
            >
                {label}
            </li>
        );
    });
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;