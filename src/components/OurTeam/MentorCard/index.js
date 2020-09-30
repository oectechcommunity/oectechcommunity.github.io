import React from 'react'

const MentorCard = ({ lead }) => {
    return (
        <div className={window.innerWidth <= 550 ? 'card' : 'card horizontal'}>
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
                    <h6 className="skills">{lead.speciality}</h6>

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
    );
};

export default MentorCard
