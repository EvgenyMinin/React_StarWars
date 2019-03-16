import React from 'react';
import PropTypes from 'prop-types';

const Row = ({list, details}) => {
    return (
        <div className="row mb-2">
            <div className="col-md-6">
                {list}
            </div>
            <div className="col-md-6">
                {details}
            </div>
        </div>
    );
}

Row.propTypes = {
    list: PropTypes.node,
    details: PropTypes.node
};
 
export default Row;