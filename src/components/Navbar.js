import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./Logo";

import { Link } from "react-router-dom";

function Navbar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <div className={`navbar ${toggleHamburger ? "background" : ""}`}>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div
        className={`hamburger ${toggleHamburger ? "checked" : ""}`}
        onClick={() => setToggleHamburger(!toggleHamburger)}
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>

      <div className={`navbar__items ${toggleHamburger ? "checked" : ""}`}>
        {[
          ["/", "Home"],
          ["/projects", "Projekte"],
          // ["/about", "Über"],
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
