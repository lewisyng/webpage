import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <div id="navbar__abovefold">
            <div className="navbar__abovefold__item" id="navbar__abovefold__projects">
                <a onClick={() => props.jump("projects__container")}>
                    Projekte
                </a>
            </div>
            <div className="navbar__abovefold__item" id="navbar__abovefold__about">
                <a href="">
                    Über
                </a>
            </div>
            <div className="navbar__abovefold__item" id="navbar__abovefold__contact">
                <a href="">
                    Kontakt
                </a>
            </div>
        </div>
    )
}

export default Navbar
