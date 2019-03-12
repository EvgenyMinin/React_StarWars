import React from 'react';
import './ErrorMessage.scss';
import icon from './death-star.png';

const ErrorMessage = () => {
    return (
        <div className="error-message">
            <img src={icon} alt="error icon"/>
            <span className="error-message__boom">BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    );
}
 
export default ErrorMessage;