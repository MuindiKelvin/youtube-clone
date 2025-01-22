import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';  // Updated import for MenuIcon
import SearchIcon from '@mui/icons-material/Search';  // Updated import for SearchIcon
import VideoCallIcon from '@mui/icons-material/VideoCall';  // Updated import for VideoCallIcon
import AppsIcon from '@mui/icons-material/Apps';  // Updated import for AppsIcon
import NotificationsIcon from '@mui/icons-material/Notifications';  // Updated import for NotificationsIcon
import { Avatar } from '@mui/material';  // Updated import for Avatar
import { Link } from 'react-router-dom';  // No change needed for Link

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
