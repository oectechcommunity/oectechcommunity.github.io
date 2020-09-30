import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import NavBar from '../../components/NavBar';
import TitleContainer from '../../components/TitleContainer';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Members from '../../components/Members';

const MembersPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    const initial = () => {
        M.AutoInit();
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            initial();
        }, 3600);
    }, []);

    return (
        <div>
            {!isLoading ? (
                <div>
                    <NavBar />
                    <TitleContainer title="Members" />
                    <Members />
                    <Footer />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default MembersPage;
