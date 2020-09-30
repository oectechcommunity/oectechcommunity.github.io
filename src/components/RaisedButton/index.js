import React from 'react';
import './styles.css';

const RaisedButton = ({ link, title, iconClass, isPrimary }) => {
    return (
        <a
            className={`waves-effect waves-light btn raised-btn ${
                isPrimary ? 'btn-primary' : 'btn-secondary'
            }`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className={`left ${iconClass}`}></i> {title}
        </a>
    );
};

export default RaisedButton;
