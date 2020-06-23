import React from "react";
import "./style.css";

function Sidenav() {
  return (
    <ul class="sidenav" id="trigger">
      <li>
        <a
          class="sidenav-close label active"
          data-text="Profile"
          href="/"
        >
          Profile
        </a>
      </li>
      <li>
        <a class="sidenav-close label" data-text="Projects" href="/projects">
          Projects
        </a>
      </li>
      <li>
        <a class="sidenav-close label" data-text="Connect" href="/connect">
          Connect
        </a>
      </li>
    </ul>
  );
}

export default Sidenav;
