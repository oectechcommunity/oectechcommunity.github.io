import React from 'react';
import './styles.css';

const ShowcaseSection = ({ bgImage, title }) => {
    return (
        <div className="parallax-container" id="showcase-section">
            <div className="title-container">
                <h5 className="title">{title}</h5>
            </div>
            <div className="parallax">
                <img src={bgImage} alt={title} />
            </div>
        </div>
    );
};

export default ShowcaseSection;
