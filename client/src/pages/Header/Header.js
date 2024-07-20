import React from 'react';
import './Header.css'; 
import logo_image from "./logo_image.png";
const Header = () => {
  return (
   
    <header class="containerheader green ">
  <nav>
    <div class="logoheader">
      <img src={logo_image}></img>
    </div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li ><a href="/">Home</a></li>
      <li ><a href="/events">Events</a></li>
      <li ><a href="/team">Team</a></li>
      <li ><a href="/contact">Contact Us</a></li>
      <li ><a href="/faq">FAQ</a></li>
      <li ><a href="/blog">Blogs</a></li>
    </ul>
  </nav>
</header>
  );
};

export default Header;
