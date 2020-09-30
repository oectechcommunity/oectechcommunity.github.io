import React from 'react';
import RaisedButton from '../RaisedButton';
import './styles.css';

const MessageSection = ({
    isReverseSection,
    details: { message, buttonText, buttonLink, iconClass, isPrimary },
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
                                <RaisedButton
                                    link={buttonLink}
                                    title={buttonText}
                                    iconClass={iconClass}
                                />
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
                                <RaisedButton
                                    link={buttonLink}
                                    title={buttonText}
                                    iconClass={iconClass}
                                    isPrimary={isPrimary}
                                />
                            )}
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default MessageSection;
