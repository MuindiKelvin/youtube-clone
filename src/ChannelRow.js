import { Avatar } from '@mui/material';  // Updated import for Avatar
import React from 'react';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';  // Updated import for VerifiedIcon
import './ChannelRow.css';

function ChannelRow( {image, channel, subs, noOfVideos, description, verified }) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
        <div className="channelRow__text">
           <h4>{channel} {verified && <VerifiedIcon />}</h4>
     <p>
         {subs} subscribers  • {noOfVideos} videos
     </p>
     
     <p>{description}</p>
  </div>
    </div>
  );
}

export default ChannelRow;
