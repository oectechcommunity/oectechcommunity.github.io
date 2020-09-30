import React from 'react';

const MemberCard = ({ member }) => {
    return (
        <div className="col s12 l4">
            <div className="card-panel member-card">
                <h6 className="academic-year">{member.academicYear}</h6>
                <h2 className="name">{member.name}</h2>
                <h6 className="branch">{member.branch}</h6>
            </div>
        </div>
    );
};

export default MemberCard;
