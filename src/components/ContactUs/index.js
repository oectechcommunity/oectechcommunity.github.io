import React from 'react';

const ContactUs = () => {
    return (
        <section class="" id="contact-us">
            <h2 class="heading">
                <span style={{ color: 'var(--color-secondary)' }}>
                    Contact{' '}
                </span>
                us
            </h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119843.89040825427!2d85.74780405273437!3d20.170662907871385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab789f26ff25ec2a!2sOrissa+Engineering+College!5e0!3m2!1sen!2sin!4v1433940020846"
                width="100%"
                height="350px"
                frameborder="0"
                title="oec tech community"
            ></iframe>
        </section>
    );
};

export default ContactUs;
