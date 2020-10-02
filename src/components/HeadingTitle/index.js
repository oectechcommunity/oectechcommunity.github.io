import React from 'react';
import './styles.css';

const HeadingTitle = ({ title, isSecondary }) => {
    return (
        <div className="heading-title">
            <div>
                <h2
                    className="title"
                    style={{ color: isSecondary ? '#ffffff' : null }}
                >
                    {title}
                </h2>
                <div
                    className="bar"
                    style={{
                        backgroundColor: isSecondary
                            ? 'var(--color-primary)'
                            : 'var(--color-secondary)',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default HeadingTitle;
