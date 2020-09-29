import React from 'react';
import './styles.css';

const MessageSection = ({
    isReverseSection,
    details: { message, buttonText, buttonLink, iconClass },
}) => {
    return (
        <section
            className={
                !isReverseSection
                    ? 'buttonOnLeftSection'
                    : 'buttonOnRightSection'
            }
            id="message-section"
        >
            <div className="container">
                {
                    <div className="row">
                        <div
                            className={
                                !isReverseSection ? 'col s12 l4' : 'col s12 l8'
                            }
                        >
                            {!isReverseSection ? (
                                <a
                                    className="waves-effect waves-light btn"
                                    href={buttonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`left ${iconClass}`}></i>
                                    {buttonText}
                                </a>
                            ) : (
                                <p>{message}</p>
                            )}
                        </div>
                        <div
                            className={
                                !isReverseSection ? 'col s12 l8' : 'col s12 l4'
                            }
                        >
                            {!isReverseSection ? (
                                <p>{message}</p>
                            ) : (
                                <a
                                    className="waves-effect waves-light btn raised-btn"
                                    href={buttonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {buttonText}
                                </a>
                            )}
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default MessageSection;
