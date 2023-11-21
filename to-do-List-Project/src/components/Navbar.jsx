import React from "react";
import imgLogo from '../assets/icons8-todo-list-100.png'

export default function Navbar() {
  return (
    <div className="navbar">
        <img className="logo" src= { imgLogo } />
      <div>Home</div>
      <div>About</div>
      <div>Plans</div>
      <div>Contact</div>
    </div>
  );
}