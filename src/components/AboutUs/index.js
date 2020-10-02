import React from 'react';
import HeadingTitle from '../HeadingTitle';
import './styles.css';

const AboutUs = () => {
    return (
        <section class="container primary-section" id="about-us">
            <HeadingTitle title="About Us" isSecondary={false} />
            <p class="paragraph center">
                Athena is a Technical Community formed by some geeky OECians to
                share the latest technologies and trends for students and tech
                enthusiast like you to make you more updated and efficient in
                this fast growing world. We organize various workshops, events,
                competitions for OECians and nonOECians. Workshops are provided
                by students as well as IT Professionals. We believe everyone has
                the knowledge and it should be distributed to make the society
                more connected and the earth a better place to live in by
                solving day to day problems. Join the beginning of the most
                important one-day immersion in the world of technical
                prototyping and bring a change. The unique possibility to
                enhance your professionalism with the smallest effort.
            </p>
        </section>
    );
};

export default AboutUs;
