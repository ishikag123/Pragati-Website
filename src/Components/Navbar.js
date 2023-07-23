import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../Assets/pragati logo mukhosh.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="title">
        <img src={logo} alt="" height={100} width={85} />
        <h1>প্রগতি</h1>
        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
        </div>
      </div>

      <div className={showMenu ? "menu responsive-menu" : "menu"}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/festivals">Festivals</Link>
      </div>
    </div>
  );
};
