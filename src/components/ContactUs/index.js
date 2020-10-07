import React from 'react';
import HeadingTitle from '../HeadingTitle';

const ContactUs = () => {
    return (
        <section id="contact-us">
            <HeadingTitle title="Contact Us" />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119843.89040825427!2d85.74780405273437!3d20.170662907871385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab789f26ff25ec2a!2sOrissa+Engineering+College!5e0!3m2!1sen!2sin!4v1433940020846"
                width="100%"
                height="350px"
                frameBorder="0"
                title="oec tech community"
            ></iframe>
        </section>
    );
};

export default ContactUs;
