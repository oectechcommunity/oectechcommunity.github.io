import React, { useEffect, useState } from 'react';
import moment from 'moment';
import FlatButton from '../../FlatButton';
import convertTo12hrsFormat from '../../../helpers/convertTo12hrsFormat';

const EventTile = ({ event }) => {
    const dateArray = event.date.split('-');

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let date = new Date(
            `${dateArray[0]}-${dateArray[1]}-${dateArray[2]} ${event.time}`
        );
        let now = new Date();

        if (event.forceClose) {
            setIsOpen(false);
        } else {
            setIsOpen(date.getTime() > now.getTime());
        }
    }, []);

    return (
        <li className="collection-item">
            <div className="row">
                <div className="col s12 l2">
                    <div>
                        <h4 className="date">{dateArray[0]}</h4>
                        <h6 className="month-year">
                            {dateArray[1]}, {dateArray[2]}
                        </h6>
                        <h6 className="month-year">
                            {convertTo12hrsFormat(event.time)}
                        </h6>
                    </div>
                </div>
                <div className="col s12 l7">
                    <div>
                        <h4 className="title">{event.title}</h4>
                        <h6 className="venue">{event.venue}</h6>
                    </div>
                </div>
                <div className="col s12 l3">
                    <FlatButton
                        title="Register"
                        link={event.registrationURL}
                        isDisabled={!isOpen}
                    />
                </div>
            </div>
        </li>
    );
};

export default EventTile;
