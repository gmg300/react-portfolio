import React, { useState, useEffect } from "react";
import "./style.css";


function Nav({label}) {
  const [title, setTitle] = useState("")
  
  // https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
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
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">{title}</a>
        <a href="#" data-target="trigger" class="sidenav-trigger show-on-large">
          <i class="fas fa-bars"></i>
            <span class="location-label">{label}</span>
        </a>
        <ul id="nav-mobile" class="right">
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
