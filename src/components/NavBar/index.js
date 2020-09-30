import React, { useEffect, useState } from 'react';
import './styles.css';
import Logo from '../../assets/logo/logo.png';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
    const pathName = props.location.pathname;

    const [navLinks, setNavLinks] = useState(null);

    useEffect(() => {
        if (pathName.includes('/members')) {
            setNavLinks(
                <li>
                    <a
                        href="https://github.com/oectechcommunity/"
                        className="nav-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contribute
                    </a>
                </li>
            );
        } else {
            setNavLinks(
                <li>
                    <Link to="/members" className="nav-link">
                        Members
                    </Link>
                </li>
            );
        }
    }, []);

    return (
        <div className="nav-container">
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        <img src={Logo} alt="Athena logo" />
                    </Link>
                    <ul className="right hide-on-med-and-down list-only-large">
                        {navLinks}
                        <li>
                            <ul className="social-icons">
                                <li>
                                    <a
                                        href="https://github.com/oectechcommunity/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.facebook.com/oectechcommunity/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://instagram.com/oectechcommunity/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com/company/oectechcommunity/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <a
                        className="right hide-on-large-only dropdown-trigger"
                        href="#!"
                        data-target="more-dropdown"
                    >
                        <i className="material-icons">more_vert</i>
                    </a>
                    <ul id="more-dropdown" className="dropdown-content">
                        {navLinks}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default withRouter(NavBar);
