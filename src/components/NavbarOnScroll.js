import { makeStyles } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './NavbarOnScroll.css';

function NavbarOnScroll() {
    
    const [scrollNav, setScrollNav] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if(window.scrollY > 500){
                setScrollNav(true);
            } else {
                setScrollNav(false);
            }
        })
    })

    const navStyle = {
        visibility: scrollNav ? "visible" : "hidden",
    }

    return(
        <div id="navbar" style={{navStyle}}>
            <div id="navbar__left">
                <div id="navbar__logo">
                    <a href="">
                            LY
                    </a>
                </div>
            </div>
            <div id="navbar__right">
                <div id="navbar__projects">
                    <a href="">
                        Projekte
                    </a>
                </div>
                <div id="navbar__about">
                    <a href="">
                        Über
                    </a>
                </div>
                <div id="navbar__contact">
                    <a href="">
                        Kontakt
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavbarOnScroll
