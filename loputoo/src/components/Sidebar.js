import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import logo from "../assets/images/lomokecopy.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarLogo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((val, key)=> {
          return (
            <li 
              key={key} 
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={()=> {window.location.pathname = val.link}}> 
              {" "}
              <div id="icon">{val.icon}</div>{" "}
              <div id="title">{val.title}</div>
            </li>
          )
        })}
      </ul>

      <div className="SidebarBottom">
        <ul className="SocialLinks">
          <li><a href="https://www.instagram.com/lomoronk"><i class="fab fa-instagram"></i></a></li>
          <li><a href="https://github.com/rvnlsk"><i class="fab fa-github"></i></a></li>
          <li><a href="https://open.spotify.com/user/11157662076?si=1413a054db324ff3"><i class="fab fa-spotify"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;