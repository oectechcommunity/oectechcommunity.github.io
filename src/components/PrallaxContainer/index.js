import React from 'react';
import bgImage from '../../assets/images/soh2018.jpg';

const ParallaxContainer = () => {
    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={bgImage} alt="bg" />
            </div>
        </div>
    );
};

export default ParallaxContainer;
