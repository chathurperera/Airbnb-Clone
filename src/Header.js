import React from "react";
import logo from "./Images/Airbnb_logo.png";
import "./Header.css";
import { ExpandMore } from "@material-ui/icons/";
import { Search } from "@material-ui/icons/";
import { Language } from "@material-ui/icons/";
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to='/'>
      <img src={logo} className="header__icon" alt="Airbnb logo" />
      </Link>
      <div className="header__center">
        <input type="text" name="" id="" />
        <Search />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
