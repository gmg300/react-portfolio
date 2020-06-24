import React from "react";
import "./style.css";


function Sidenav() {

  return (
       <ul class="sidenav" id="trigger">
      <li>
        <a
          class="sidenav-close label strike"
          data-text="Profile"
          href="/">
          <span>Profile</span>
        </a>
      </li>
      <li>
        <a class="sidenav-close label strike"
           data-text="Projects"
           href="/projects">
          <span>Projects</span>
        </a>
      </li>
      <li>
        <a class="sidenav-close label strike"
           data-text="Connect"
           href="/connect">
          <span>Connect</span>
        </a>
      </li>
    </ul>
  );
}

export default Sidenav;
