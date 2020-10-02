import React from 'react';
import HeadingTitle from '../HeadingTitle';
import MentorCard from './MentorCard';
import './styles.css';

const OurTeam = ({ ourTeamLeads }) => {
    return (
        <section id="our-team">
            <div className="row">
                <div className="col s12 l7 member-cards">
                    {ourTeamLeads.map((lead, i) => (
                        <MentorCard key={i} lead={lead} />
                    ))}
                </div>
                <div className="col s12 l5 stack" id="our-team-details">
                    <div className="mt-2 mb-2">
                        <HeadingTitle title="Our Team" isSecondary={true} />
                        <p className="paragraph white-text">
                            Our team is of more than 6 mentors and volunteers
                            having knowledge of different technologies. The team
                            will guide all the geeks and organise events &
                            workshops for them.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
