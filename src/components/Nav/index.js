import React, {useState, useEffect} from "react";
import "./style.css";

function Nav() {
  const [title, setTitle] = useState("")

  useEffect(() => {
    function getTitle() {
      if (window.innerWidth <= 768) {
        setTitle(`G G`);
      } else {
        setTitle(`GARRETT GASSENSMITH`);
      }
    }
    getTitle()
    window.addEventListener('resize', getTitle)
  })
 
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">{title}</a>
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
