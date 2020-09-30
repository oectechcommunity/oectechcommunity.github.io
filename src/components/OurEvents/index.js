import React, { useEffect, useState } from 'react';
import './styles.css';
import RaisedButton from '../RaisedButton';
import Axios from 'axios';
import { EVENTS_API } from '../../utils/apiURLs';
import EventCard from './EventCard';

const OurEvents = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [eventsList, setEventsList] = useState([]);

    const fetchEventList = async () => {
        try {
            const response = await Axios.get(EVENTS_API);
            setEventsList(response.data);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchEventList();
    }, []);

    return (
        <div>
            {!isLoading ? (
                <section className="primary-section container" id="our-events">
                    <h2 className="heading">
                        <span style={{ color: 'var(--color-secondary)' }}>
                            Our{' '}
                        </span>
                        Events
                    </h2>
                    <div>
                        <div className="row">
                            {eventsList.map((event, i) => (
                                <EventCard event={event} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className="center">
                        <RaisedButton
                            link="#!"
                            title="View All Events"
                            isPrimary={false}
                        />
                    </div>
                </section>
            ) : null}
        </div>
    );
};

export default OurEvents;
