import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">GARRETT GASSENSMITH</a>
        <a href="#" data-target="trigger" class="sidenav-trigger show-on-large">
          <i class="fas fa-bars"></i>
          <span class="menu-label"></span>
        </a>
        <ul id="nav-mobile" class="right">
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
