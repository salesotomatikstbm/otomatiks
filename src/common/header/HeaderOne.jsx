import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className="header-style-1">
                <div className="header-topbar topbar-style-2">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-8 col-lg-6 col-md-12">
                                <div className="header-contact text-center text-lg-start d-none d-sm-block">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <span className="text-color me-2"><i className="fa fa-phone-alt"></i></span>
                                            <a href="tel:+919043209448" className="text-decoration-none">+91 90432 09448</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="text-color me-2"><i className="fa fa-envelope"></i></span>
                                            <a href="mailto:support@otomatiks.in" className="text-decoration-none">support@otomatiks.in</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                                <div className="d-sm-flex justify-content-center justify-content-lg-end">
                                    <div className="header-socials text-center text-lg-end">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <Link to="https://www.facebook.com/otomatiks" className="text-decoration-none" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="https://x.com/i/flow/login?redirect_after_login=%2FOtomatikss" className="text-decoration-none" target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="#" className="text-decoration-none">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="https://www.instagram.com/explore/tags/otomatiks/" className="text-decoration-none" target="_blank">
                                                    <i className="fab fa-pinterest"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="https://www.youtube.com/channel/UCTRQX3ue5zD2qdwyjce42jw" className="text-decoration-none" target="_blank">
                                                    <i className="fab fa-youtube"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="header-btn text-center text-lg-end">
                                        <a href="/login" className="text-decoration-none">
                                            <i className="fa fa-user-alt"></i> Login/Register
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`header-navbar navbar-sticky ${windowWidth <= 991 ? 'mobile-menu' : ''}`}>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="site-logo">
                                <Link to="#" className="text-decoration-none">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Course Thumb" className="img-fluid"/>
                                </Link>
                            </div>

                            <div className="offcanvas-icon d-block d-lg-none">
                                <a href="#" onClick={openMenu} className="nav-toggler text-decoration-none">
                                    <i className="fal fa-bars"></i>
                                </a>
                            </div>

                            <div className="header-category-menu d-none d-xl-block">
                                <ul>
                                    <li className="has-submenu">
                                        <Link to="#" className="text-decoration-none"><i className="fa fa-th me-2"></i>Services</Link>
                                        <ul className="submenu">
                                            <li><Link to="#" className="text-decoration-none">Robotics Workshops</Link></li>
                                            <li><Link to="#" className="text-decoration-none">Robotics Curriculum</Link></li>
                                            <li><Link to="#" className="text-decoration-none">Robotics Laboratory</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <nav className={`site-navbar ms-auto ${isMenuOpen ? 'menu-on' : ''}`}>
                                <Nav />
                                {isMenuOpen && (
                                    <a href="#" onClick={closeMenu} className="nav-close text-decoration-none">
                                        <i className="fal fa-times"></i>
                                    </a>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
