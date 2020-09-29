import React from 'react';
import './styles.css';
import IntroductionToAthenaBanner from '../../assets/images/soh2018.jpg';

const OurEvents = () => {
    const eventLists = [
        {
            banner: IntroductionToAthenaBanner,
            title: 'Introduction to Athena',
            date: '12-Jan-2019',
            venue: 'AV Hall, OEC BBSR',
            details:
                'Here is some more information about this product that is only revealed once clicked on.',
        },
        {
            banner: IntroductionToAthenaBanner,
            title: 'Introduction to Athena',
            date: '12-Jan-2019',
            venue: 'AV Hall, OEC BBSR',
            details:
                'Here is some more information about this product that is only revealed once clicked on.',
        },
        {
            banner: IntroductionToAthenaBanner,
            title: 'Introduction to Athena',
            date: '12-Jan-2019',
            venue: 'AV Hall, OEC BBSR',
            details:
                'Here is some more information about this product that is only revealed once clicked on.',
        },
    ];

    return (
        <section className="primary-section container" id="our-events">
            <h2 className="heading">
                <span style={{ color: 'var(--color-secondary)' }}>Our </span>
                Events
            </h2>
            <div>
                <div className="row">
                    {/* <div style={{ display: 'flex', justifyContent: 'center' }}></div> */}
                    {eventLists.map((event, i) => (
                        <div className="col s12 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={event.banner} />
                                    <a className="btn-floating halfway-fab btn-large pulse activator">
                                        <i className="material-icons">notes</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">
                                        {event.title}
                                    </span>
                                    <span className="event-date">
                                        {`${event.date}, ${event.venue}`}
                                    </span>
                                </div>
                                <div className="card-action">
                                    <a className="waves-effect waves-white btn-flat register-btn disabled">
                                        Registration Closed
                                    </a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">
                                        {event.title}
                                        <i className="material-icons right">
                                            highlight_off
                                        </i>
                                    </span>
                                    <span className="event-date">
                                        {`${event.date}, ${event.venue}`}
                                    </span>
                                    <p>{event.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="center">
                <a
                    className="waves-effect waves-light btn raised-btn mt-2"
                    style={{ backgroundColor: 'var(--color-secondary' }}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View All Events
                </a>
            </div>
        </section>
    );
};

export default OurEvents;
