import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Intro from '../../components/Intro';
import Loader from '../../components/Loader';
import MessageSection from '../../components/MessageSection';
import NavBar from '../../components/NavBar';
import OurEvents from '../../components/OurEvents';
import OurTeam from '../../components/OurTeam';
import ParallaxContainer from '../../components/PrallaxContainer';
import ShowcaseSection from '../../components/ShowcaseSection';
import Soh2018 from '../../assets/images/soh2018.jpg';

const HomePage = () => {
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
                    <Intro />
                    <MessageSection
                        isReverseSection={true}
                        details={{
                            message:
                                'Join with us to attend all the events organisedby us.',
                            buttonText: 'Join us today',
                            buttonLink: '/',
                            isPrimary: true,
                            // iconClass: 'fas fa-user-plus',
                        }}
                    />
                    <ShowcaseSection
                        bgImage={Soh2018}
                        title="Represent OEC at Smart Odisha Hackathon 2018"
                    />
                    <AboutUs />
                    <ParallaxContainer />
                    <OurTeam />
                    <MessageSection
                        isReverseSection={true}
                        details={{
                            message:
                                'Join with us to attend all the events organised by us.',
                            buttonText: 'be our volunteer',
                            buttonLink: '/',
                            isPrimary: true,
                        }}
                    />

                    <ShowcaseSection
                        bgImage={Soh2018}
                        title="Organising Zazen TechFest 2019"
                    />

                    <OurEvents />
                    <ContactUs />
                    <Footer />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default HomePage;
