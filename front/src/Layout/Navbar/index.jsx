import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
    <div className="navbar">
    <div className="header">
        <div className="nav_search">
          <input type="text" name="" id="" placeholder="search" />
        </div>
        <div className="nav_shoppers">
          <span>Shoppers</span>
        </div>
        <div className="nav_icons">
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <div className="pages">
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/add"}>AddPage</NavLink></li>
          <li><NavLink to={"/detail/:id"}>Detail</NavLink></li>
          <li><NavLink to={"/basket"}>Basket</NavLink></li>
          <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
        </ul>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
