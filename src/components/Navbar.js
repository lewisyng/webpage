import React, { useState } from "react";
import "./Navbar.sass";
import Logo from "./Logo";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="navbar__items__large">
        {[
          ["/", "Home"],
          ["/about", "Über mich"],
          ["/contact", "Kontakt"],
        ].map((item) => {
          return (
            <div className="navbar__items__large__item">
              <Link to={item[0]}>{item[1]}</Link>
            </div>
          );
        })}
      </div>

      <button
        className="navbar__items__small__btn"
        onClick={() => setToggleHamburger(!toggleHamburger)}
      >
        {toggleHamburger === false ? (
          <MenuIcon fontSize="large" />
        ) : (
          <CloseIcon fontSize="large" />
        )}
      </button>
      <div
        className={`navbar__items__small ${
          toggleHamburger ? "open" : "closed"
        }`}
      >
        {[
          ["/", "Home"],
          ["/about", "Über mich"],
          ["/contact", "Kontakt"],
        ].map((item) => {
          return (
            <div
              className="navbar__items__small__item"
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
