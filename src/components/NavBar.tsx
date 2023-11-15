import * as React from "react";
import { NavLink } from "react-router-dom";

const logo = require("../../static/assets/images/logo.png");

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        {/* @ts-ignore */}
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-links">
          <NavLink
            className="nav-links--item"
            exact
            to="/"
            activeClassName="nav-links--active-item"
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
