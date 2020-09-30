import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Athena Tech Community</h5>
                        <p className="grey-text text-lighten-4">
                            The technical community of Orissa Engineering
                            College, Bhubaneswar
                        </p>
                        <p className="grey-text text-lighten-4">
                            Learn. Build. Network. Grow.{' '}
                        </p>
                        <div className="social">
                            <a href="#!">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#!">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#!">
                                <i className="fab fa-instagram"></i>
                            </a>

                            <a href="#!">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h6 className="white-text">
                            Made with<i className="fas fa-coffee"></i>and
                            <i className="fas fa-heart"></i>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col l4 s12">
                            <h6 className="white-text">
                                © 2020 Athena All Rights Reserved
                            </h6>
                        </div>
                        <div className="col l4 s12 right">
                            <h6 className="white-text">
                                Designed by{' '}
                                <a
                                    href="https://devsmranjan.github.io"
                                    className="grey-text text-lighten-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Smruti Ranjan Rana
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
