import React from 'react'
import '../css/Services.css'
import {Element} from 'react-scroll'

const Services: React.FC = () => {
    return (
        <Element name="services">
            <div className="services">
                <div className="explanation">
                    <p className="title">What we do for you</p>
                    <p className="highlight">Strategy. Design Content. Technology Development</p>
                    <p className="description">There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
                    <p><a className="url" href="/">>More know About us</a></p>
                </div>
                <div className="message">
                    <p className="message-text">With More than 10 Years of <br/>
                        Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed</p>
                        <div className="author">
                            <img src={require("../assets/ceo_pic.png")} alt="ceo"/>
                            <div className="info">
                                <div className="name">Genevieve Rodriquez</div>
                                <div className="about">Founder & CEO, Webovio</div>
                            </div>
                        </div>
                </div>
            </div>
        </Element>
    )
}

export default Services