import React from 'react';
import './AboveFold.css';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import Logo from './Logo';

function AboveFold(props) {
    return (
        <div id="aboveFold">
            <Logo />
            <Navbar
                jump={props.linkClick}
            />
            <div id="aboveFold__name">
                Lewis Young
            </div>
            <div id="aboveFold__slogan">
                create, develop, progress
            </div>
            <SocialLinks />
        </div>
    )
}

export default AboveFold
