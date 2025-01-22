import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';  // Updated import for SubscriptionsIcon
import HomeIcon from '@mui/icons-material/Home';  // Updated import for HomeIcon
import WhatshotIcon from '@mui/icons-material/Whatshot';  // Updated import for WhatshotIcon
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';  // Updated import for VideoLibraryIcon
import HistoryIcon from '@mui/icons-material/History';  // Updated import for HistoryIcon
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';  // Updated import for OndemandVideoIcon
import WatchLaterIcon from '@mui/icons-material/WatchLater';  // Updated import for WatchLaterIcon
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';  // Updated import for ThumbUpAltOutlinedIcon
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';  // Updated import for ExpandMoreOutlinedIcon

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={WhatshotIcon} title="Trending"/>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
    <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
    <hr />
    </div>
  );
}

export default Sidebar;
