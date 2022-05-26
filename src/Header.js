import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");





  return (
    <div className="header">
        
    <div className="header__left">
        <MenuIcon />
        <Link to="/">
        <img className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png" alt="" />
       </Link>
       </div> 
    <div className="header__input">
      <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
    <Link to={`/search/${inputSearch}`}>
       <SearchIcon className="header__inputButton" />
    </Link>
    </div>

    <div className="header__icons">
      <VideoCallIcon className="header__icon" />
      <AppsIcon className="header__icon" />
      <NotificationsIcon className="header__icon" />
      <Avatar
      src="https://yt3.ggpht.com/yti/APfAmoFyApdO3VD7xWVxKEr1113u0gUD7l5C24KZju12Jw=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
    </div>

    </div>
  );
}

export default Header;
