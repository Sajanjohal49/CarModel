import React, { useState } from "react";
import styled from "styled-components";

import menuItems from "./MenuItems";

import "./Navbar.css";
import logo from '../../carMedia/car3.png'


const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
        
      <h1 className="navbar-logo">
        GT<br/><span className="logoR"> &nbsp;R</span>
        
       

      </h1>
      <div className="menu-icon" onClick={handleClick}>
        {/* <i className={active ? "fas fa-times" : "fas fa-bars"}></i> */}
        <Image src={active ? logo:logo} alt="Logo"/>
       

        
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      
    </nav>
  );
};

export default Navbar;
const Image=styled.img`
width:8rem;
height:5rem;
@media (max-width: 700px) {
  width:3.9rem;
  height: 3rem;
  position: absolute;
  left: 0px;

}


`
// const MenuImage =styled.img`
// width:2.67rem;
// height: 2.67rem;
// position: absolute;
// right: 0px;
// padding: 10px;
// `
