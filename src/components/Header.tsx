import React, { useState } from "react";
import "../css/Header.css";
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-scroll'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {

    const [isNavVisible, setNavVisibility] = useState(false);

      const toggleNav = () => {
        setNavVisibility(!isNavVisible);
      };
    return (
        <header>
            <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
            <button onClick={toggleNav} className="Burger">
                <img src={require("../assets/menu.png")} alt="menu" />
            </button>
            <CSSTransition
                in={isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit>

                <nav>
                <Link activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500} onClick={toggleNav}>
                  About us
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={toggleNav}>
                  Projects
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={toggleNav}>
                  Contact
                </Link>
                </nav>
            </CSSTransition>
        </header>
    )
}

export default Header