import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
       image="data:image/jpeg;base64,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"
       channel="Tophaz"
       verified
       subs="6.4M"
       noOfVideos={64}
       description="Your Five Star Music Deejay, Producer."
      
      />
      <hr />
      <VideoRow 
      views="1.6 M"
      subs="47.4K"
      description="Best of 90s & 2000s HIPHOP/RNB HITS"
      timestamp="Jan 25, 2021"
      channel="Tophaz"
      title="DJ TOPHAZ - OL'SKOOL WAVE (90s & 2000s HIPHOP/RNB HITS) [TUPAC, EVE, ASHANTI, SNOOP DOGG, ICE CUBE]"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuVHQM0GpdWXO5tySMFKk8XfeI4Vyu-aZHQ&usqp=CAU"
      
      />

      <VideoRow 
      views="840K"
      subs="47.4K"
      description="2000s THROWBACK RNB HIPHOP VIDEO MIX"
      timestamp="Jun 25, 2020"
      channel="Tophaz"
      title="DJ TOPHAZ - THUG LOVE MIXPERIENCE"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7yEUS_1RUBWOcCYdX0uSl5A2nfHdPqFueA&usqp=CAU"
      
      />

      <VideoRow 
      views="1.6 M"
      subs="47.4K"
      description="Best of 2020/21 URBAN POP HITS"
      timestamp="MAR 21, 2021"
      channel="Tophaz"
      title="DJ TOPHAZ - POP CHRONICLES VOL.3"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0B1vdb7iEAQx9HCS8YE7dRjUA0Tzx0Eplmg&usqp=CAU"
      
      
      />


    </div>
  );
}

export default SearchPage;
