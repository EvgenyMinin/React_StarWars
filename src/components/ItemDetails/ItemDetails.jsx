import React, { Component } from 'react';
import './ItemDetails.scss';

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item custom-item">
            <span className="list-group-item__title">{label}:</span>
            <span>{item[field]}</span>
        </li>
    );
}

export { Record };

class ItemDetails extends Component {

    state = {
        item: [],
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item)
                });
            });
    }

    render() {
        const { item, image } = this.state;
        const { name } = item;
        
        if (item.length === 0) {
            return <span>Select a item from a list</span>
        }
        return (
            <div className="item-details card">
                <img 
                    src={image}
                    alt="item pic"
                    className="item-details__image"
                />
                <div className="card-body custom-card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ItemDetails;