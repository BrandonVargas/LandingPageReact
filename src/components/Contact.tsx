import React from 'react'
import {Element} from 'react-scroll'
import '../css/Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faGooglePlus, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Contact: React.FC = () => {
    return(
        <Element name="contact">
            <div className="contact">
                <div className="header">
                    <p className="title">Let’s make something amazing together.</p>
                    <a className="url" href="/">LET'S GET STARTED</a>
                </div>
                <div className="contact-info">
                    <div className="row">
                        <div className="info-section">
                            <p className="info-label">Phone</p>
                            <p className="info">+32 50 31 28 32</p>
                        </div>
                        <div className="info-section">
                            <p className="info-label">Adress</p>
                            <p className="info">491 Merlin Crest Suite 963</p>
                        </div>
                    </div>

                    <div className="separator"/>

                    <div className="row">
                        <div className="info-section">
                            <p className="info">SERVICES</p>
                            <ul className="list">
                                <li className="info-label">Strategy Design</li>
                                <li className="info-label">Product Design</li>
                                <li className="info-label">Content Strategy</li>
                                <li className="info-label">Brand Strategy</li>
                                <li className="info-label">Development</li>
                            </ul>
                        </div>
                        <div className="info-section">
                            <p className="info">HELP AND ADVICE</p>
                            <ul className="list">
                                <li className="info-label">How it works</li>
                                <li className="info-label">Contact Support</li>
                                <li className="info-label">Privacy Police</li>
                                <li className="info-label">FAQ</li>
                            </ul>
                        </div>
                        <div className="info-section">
                            <p className="info">COMPANY</p>
                            <ul className="list">
                                <li className="info-label">About</li>
                                <li className="info-label">Blog</li>
                                <li className="info-label">Contact</li>
                                <li className="info-label">Jobs</li>
                            </ul>
                        </div>

                        <div className="info-section">
                            <p className="info">GET IN TOUCH</p>
                            <ul className="list">
                                <li className="info-label">Feel free to get in touch with us via email</li>
                            </ul>
                            <a className="url email" href="mailto:info.webovio@gmail.com">info.webovio@gmail.com</a>
                            <ul className="social">
                                <li className="list-icon"><FontAwesomeIcon icon={faFacebook} size="lg" className="icon"/></li>
                                <li className="list-icon"><FontAwesomeIcon icon={faTwitter} size="lg" className="icon"/></li>
                                <li className="list-icon"><FontAwesomeIcon icon={faGooglePlus} size="lg" className="icon"/></li>
                                <li className="list-icon"><FontAwesomeIcon icon={faLinkedin} size="lg" className="icon"/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="separator"/>
                    <div className="footer">
                        <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
                        <p className="copyright">© 2020@webovio. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact