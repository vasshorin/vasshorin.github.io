import React from "react";
import { useState } from "react";
import "./header.css";
 

const Header = () => {
    const [Toggle, handleShow] = useState(false);
    
    return (


        <header className="header">
            <nav className="nav container">  
                <a href="index.html" className="nav__logo">Vasily</a>

                <div className={Toggle ? "nav__menu show" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Skills
                            </a>
                        </li>   

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Past Work
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>

                    </ul>
                </div>
                {/* <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle" onClick={() => handleShow(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div> */}
            </nav>
        </header>
    );
}

export default Header;
