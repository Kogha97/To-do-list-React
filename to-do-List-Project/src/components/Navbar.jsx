import React from "react";
import imgLogo from "../assets/icons8-todo-list-100.png";
import ThemeToggle from "./ToggleButton";
import { CurrentTime } from "./CurrentTime";
import {CurrentDate} from "./CurrentDate"

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={imgLogo} />
      <CurrentTime/>
      <CurrentDate/>

      <span className="nav-items">
        <div>Home</div>
        <div>About</div>
        <div>Product</div>
        <div>Contact</div>
        <div>
          <ThemeToggle />
        </div>
      </span>
    </div>
  );
}
