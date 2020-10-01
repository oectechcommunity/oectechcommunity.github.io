import React, { useState, useEffect } from 'react';
import colors from '../../../utils/colors';

const MemberCard = ({ member }) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const [iconSocialClass, seticonSocialClass] = useState(null);
    
    useEffect(() => {
        if (member.anySocialLink.includes('facebook')) {
            seticonSocialClass('fa-facebook');
        } else if (member.anySocialLink.includes('instagram')) {
            seticonSocialClass('fa-instagram');
        } else if (member.anySocialLink.includes('linkedin')) {
            seticonSocialClass('fa-linkedin');
        } else if (member.anySocialLink.includes('github')) {
            seticonSocialClass('fa-github');
        } else {
            seticonSocialClass(null);
        }
    }, []);

    return (
        <div className="col s12 m6 l4">
            <div className="card-container">
                <div
                    className="card-panel member-card"
                    style={{ borderLeft: `4px solid ${randomColor}` }}
                >
                    <h6 className="academic-year">{member.academicYear}</h6>
                    <h2 className="name truncate">{member.name}</h2>
                    <h6 className="branch truncate">{member.branch}</h6>
                </div>

                {iconSocialClass ? (
                    <div className="card-overlay">
                        <a
                            href={member.anySocialLink}
                            style={{ color: randomColor }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`fab ${iconSocialClass}`}></i>
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default MemberCard;
