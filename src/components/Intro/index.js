import React from 'react';
import TeamWork from '../../assets/images/team-work.svg';
import RaisedButton from '../RaisedButton';
import './styles.css';

const Intro = () => {
    return (
        <section className="container block" id="intro">
            <div className="row">
                <div className="col s12 l6">
                    <div>
                        <h3>Welcome to our Tech Community</h3>
                        <h6>#Learn #Build #Network #Grow</h6>

                        <div className="mt-3">
                            <RaisedButton
                                link="#!"
                                title="Latest Events"
                                isPrimary={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="col s12 l6 hide-on-med-and-down">
                    <img src={TeamWork} alt="Team Work" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
