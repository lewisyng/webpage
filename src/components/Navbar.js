import React, { useState } from "react";
import "./Navbar.sass";
import Logo from "./Logo";

import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <div className={`navbar ${toggleHamburger ? "open" : ""}`}>
      <div className="navbar__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div
        className={`navbar__hamburger ${toggleHamburger ? "open" : ""}`}
        onClick={() => setToggleHamburger(!toggleHamburger)}
      >
        <span class={`navbar__line one ${toggleHamburger ? "open" : ""}`}></span>
        <span class={`navbar__line two ${toggleHamburger ? "open" : ""}`}></span>
        <span class={`navbar__line three ${toggleHamburger ? "open" : ""}`}></span>
        <div className={`splash ${toggleHamburger ? "open" : ""}`}></div>
      </div>

      <div className={`navbar__items ${toggleHamburger ? "open" : ""}`}>
        {[
          ["/", "Home"],
          // ["/projects", "Projekte"],
          ["/about", "Über mich"],
          ["/contact", "Kontakt"],
        ].map((item) => {
          return (
            <div
              className="navbar__item"
              onClick={() => setToggleHamburger(false)}
            >
              <Link to={item[0]}>{item[1]}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
