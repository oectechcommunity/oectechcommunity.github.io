import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MEMBERS_API } from '../../utils/apiURLs';
import MemberCard from './MemberCard';
import './styles.css';

const Members = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [membersList, setMembersList] = useState([]);

    const fetchMembersList = async () => {
        try {
            const response = await Axios.get(MEMBERS_API);
            setMembersList(response.data);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchMembersList();
    }, []);

    return (
        <div>
            {!isLoading ? (
                <section className="container mt-4 mb-4" id="members">
                    <div className="row">
                        {membersList.map((member, i) => (
                            <MemberCard member={member} key={i} />
                        ))}
                    </div>
                </section>
            ) : null}
        </div>
    );
};

export default Members;
