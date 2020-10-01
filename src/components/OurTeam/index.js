import React from 'react';
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
                    <h2
                        className="heading"
                        style={{ marginTop: '0', color: '#ffffff' }}
                    >
                        <span style={{ color: ' var(--color-primary)' }}>
                            Our
                        </span>{' '}
                        Team
                    </h2>
                    <p className="paragraph white-text">
                        Our team is of more than 6 mentors and volunteers having
                        knowledge of different technologies. The team will guide
                        all the geeks and organise events & workshops for them.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
