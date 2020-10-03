import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div id="navbar">
            <div id="navbar__logo">
                <Link to="/">
                    LY
                </Link>
            </div>
            <div id="navbar__content">
                <div id="navbar__projects">
                    <Link to="/projects">
                        Projekte
                    </Link>
                </div>
                <div id="navbar__about">
                    <Link to="/about">
                        Über
                    </Link>
                </div>
                <div id="navbar__contact">
                    <Link to="/contact">
                        Kontakt
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
