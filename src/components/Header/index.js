import React from "react";
import "./style.css";
import Nav from '../Nav';
import Sidenav from '../Sidenav';

function Header() {
  return (
    <header>
      <Nav />
      <Sidenav />
    </header>
  );
}

export default Header;
