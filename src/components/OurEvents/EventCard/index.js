import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="col s12 l4">
            <div className="card">
                <div className="card-image">
                    <img src={event.banner} alt={event.title} />
                    <a
                        className="btn-floating halfway-fab btn-large pulse activator"
                        href="#!"
                    >
                        <i className="material-icons">notes</i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="card-title">{event.title}</span>
                    <span className="event-date">
                        {`${event.date}, ${event.venue}`}
                    </span>
                </div>
                <div className="card-action">
                    <a
                        className="waves-effect waves-white btn-flat register-btn disabled"
                        href="#!"
                    >
                        Registration Closed
                    </a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {event.title}
                        <i className="material-icons right">highlight_off</i>
                    </span>
                    <span className="event-date">
                        {`${event.date}, ${event.venue}`}
                    </span>
                    <p>{event.details}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
