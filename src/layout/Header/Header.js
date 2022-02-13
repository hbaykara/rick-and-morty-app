import React from "react";
import logo from "assets/rick-and-morty.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
    </header>
  );
};

export default Header;
