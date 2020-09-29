import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import NavBar from './components/NavBar';
import M from 'materialize-css';
import Intro from './components/Intro';
import MessageSection from './components/MessageSection';
import ShowcaseSection from './components/ShowcaseSection';
import AboutUs from './components/AboutUs';
import ParallaxContainer from './components/PrallaxContainer';
import OurTeam from './components/OurTeam';
import LeadPhoto from './assets/images/current-leads/pankaj-kumar-mondal.jpg';
import Soh2018 from './assets/images/soh2018.jpg';
import OurEvents from './components/OurEvents';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <div>
            <NavBar />
            <Intro />
            <MessageSection
                isReverseSection={false}
                details={{
                    message:
                        'Join with us to attend all the events organisedby us.',
                    buttonText: 'Join us today',
                    buttonLink: '/',
                    iconClass: 'fas fa-user-plus',
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
                    iconClass: 'fas fa-user-plus',
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
    );
};

export default App;
