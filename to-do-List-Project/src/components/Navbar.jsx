import React from "react";
import imgLogo from '../assets/icons8-todo-list-100.png'
import ThemeToggle from "./ToggleButton";



export default function Navbar() {
  return (
    <div className="navbar">
        <img className="logo" src= { imgLogo } />
      <span className="nav-items"><div>Home</div>
      <div>About</div>
      <div>Product</div>
      <div>Contact</div>
      <div><ThemeToggle/></div>
      </span>
    </div>
  );
}