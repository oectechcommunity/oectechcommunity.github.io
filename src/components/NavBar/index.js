import React from 'react';
import './styles.css';
import Logo from '../../assets/logo/logo.png';

const NavBar = () => {
    return (
        <div className="nav-container">
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo left">
                        <img src={Logo} alt="Athena logo" />
                    </a>
                    <ul className="right hide-on-med-and-down list-only-large">
                        <li className="">
                            <a
                                href="#under-development-alert"
                                className="nav-link modal-trigger"
                            >
                                Members
                            </a>
                        </li>
                        <li>
                            <ul className="social-icons">
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
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
                        <li>
                            <a
                                href="#under-development-alert"
                                className="modal-trigger"
                            >
                                Members
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
