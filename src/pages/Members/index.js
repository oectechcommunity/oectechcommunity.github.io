import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import NavBar from '../../components/NavBar';
import TitleContainer from '../../components/TitleContainer';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Members from '../../components/Members';
import { MEMBERS_API } from '../../utils/apiURLs';
import Axios from 'axios';
import bgImage from '../../assets/images/bg-2.jpg';

const MembersPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [membersList, setMembersList] = useState([]);

    const initial = () => {
        M.AutoInit();
    };

    const fetchMembersList = async () => {
        setTimeout(async () => {
            try {
                const response = await Axios.get(MEMBERS_API);
                setMembersList(response.data);

                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }

            initial();
        }, 1500);
    };

    useEffect(() => {
        fetchMembersList();
    }, []);

    return (
        <div>
            {!isLoading ? (
                <div>
                    <NavBar />
                    <TitleContainer title="Members" bgImage={bgImage} />
                    <Members membersList={membersList} />
                    <Footer />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default MembersPage;
