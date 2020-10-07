import React from 'react';
import './styles.css';

const FlatButton = ({ link, title, iconClass, isPrimary, isDisabled }) => {
    return (
        <a
            className={`waves-effect waves-light btn flat-btn ${
                isDisabled ? 'disabled' : null
            }`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className={`left ${iconClass}`}></i>{' '}
            {isDisabled ? 'Closed' : title}
        </a>
    );
};

export default FlatButton;
