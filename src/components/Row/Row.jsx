import React from 'react';

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
 
export default Row;