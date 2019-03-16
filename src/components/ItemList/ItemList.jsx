import React from 'react';
import PropTypes from 'prop-types';
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

ItemList.defaultProps = {
    getSelectedItem: () => {}
};

ItemList.propTypes = {
    getSelectedItem: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default ItemList;