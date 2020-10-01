import React from 'react';
import MemberCard from './MemberCard';
import './styles.css';

const Members = ({ membersList }) => {
    return (
        <section className="container mt-4 mb-4" id="members">
            <div className="row">
                {membersList.map((member, i) => (
                    <MemberCard member={member} key={i} />
                ))}
            </div>
        </section>
    );
};

export default Members;
