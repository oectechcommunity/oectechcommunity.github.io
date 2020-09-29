import React from 'react';
import bgImage from '../../assets/images/soh2018.jpg';

const ParallaxContainer = () => {
    return (
        <div class="parallax-container">
            <div class="parallax">
                <img src={bgImage} alt="bg" />
            </div>
        </div>
    );
};

export default ParallaxContainer;
