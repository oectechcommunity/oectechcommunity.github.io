import React from 'react';
import './styles.css';
import LeadPhoto from '../../assets/images/current-leads/pankaj-kumar-mondal.jpg';

const OurTeam = () => {
    const ourTeamLeads = [
        {
            name: 'Pankaj Kumar Mondal',
            position: 'Athena Convener',
            speciality: 'Ethical Hacking',
            photo: LeadPhoto,
            social: {
                facebook: 'https://facebook.com',
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                mail: 'smrutiranjan.offc@gmail.com',
            },
        },
        {
            name: 'Smruti Ranjan Rana',
            position: 'Technical Convener',
            speciality: 'Web Dev',
            photo: LeadPhoto,
            social: {
                facebook: 'https://facebook.com',
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                mail: 'smrutiranjan.offc@gmail.com',
            },
        },
        {
            name: 'Pankaj Kumar Mondal',
            position: 'Athena Convener',
            speciality: 'Ethical Hacking',
            photo: LeadPhoto,
            social: {
                facebook: 'https://facebook.com',
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                mail: 'smrutiranjan.offc@gmail.com',
            },
        },
        {
            name: 'Pankaj Kumar Mondal',
            position: 'Athena Convener',
            speciality: 'Ethical Hacking',
            photo: LeadPhoto,
            social: {
                facebook: 'https://facebook.com',
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                mail: 'smrutiranjan.offc@gmail.com',
            },
        },
        {
            name: 'Pankaj Kumar Mondal',
            position: 'Athena Convener',
            speciality: 'Ethical Hacking',
            photo: LeadPhoto,
            social: {
                facebook: 'https://facebook.com',
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                mail: 'smrutiranjan.offc@gmail.com',
            },
        },
    ];

    return (
        <section id="our-team">
            <div className="row">
                <div className="col s12 l7 member-cards">
                    {ourTeamLeads.map((lead, i) => (
                        <div
                            className={
                                window.innerWidth <= 550
                                    ? 'card'
                                    : 'card horizontal'
                            }
                            key={i}
                        >
                            <div className="card-image">
                                <div>
                                    <img src={lead.photo} alt={lead.name} />
                                </div>
                            </div>
                            <div className="card-content">
                                <div>
                                    <span className="position">
                                        {lead.position.toUpperCase()}
                                    </span>
                                    <h4 className="name">{lead.name}</h4>
                                    <h6 className="skills">
                                        {lead.speciality}
                                    </h6>

                                    <div className="social">
                                        <a
                                            href={lead.social.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                        <a
                                            href={lead.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a
                                            href={lead.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a
                                            href={`mailto:${lead.social.mail}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col s12 l5 stack" id="our-team-details">
                    <h2
                        className="heading"
                        style={{ marginTop: '0', color: '#ffffff' }}
                    >
                        <span style={{ color: ' var(--color-primary)' }}>
                            Our
                        </span>
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
