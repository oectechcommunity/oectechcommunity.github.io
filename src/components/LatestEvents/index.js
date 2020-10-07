import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { EVENTS_API } from '../../utils/apiURLs';
import HeadingTitle from '../HeadingTitle';
import EventTile from './EventTile';
import './styles.css';
import RaisedButton from '../RaisedButton';

const LatestEvents = () => {
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
                <section
                    className="primary-section container"
                    id="latest-events"
                >
                    <HeadingTitle isSecondary={false} title="Latest Events" />
                    <ul className="collection mt-2">
                        {eventsList.map((event, i) => (
                            <EventTile event={event} key={i} />
                        ))}
                    </ul>

                    {eventsList.length > 3 ? (
                        <div className="center">
                            <RaisedButton title="View All Events" link="#" />
                        </div>
                    ) : null}
                </section>
            ) : null}
        </div>
    );
};

export default LatestEvents;
