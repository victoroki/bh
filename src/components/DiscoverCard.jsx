import React from 'react';
import "../assets/css/index.css";

function DiscoverCard(props) {
  return (
    <div className='discover-card'>
      <div className='image-wrapper'>
        <img src={require("../assets/images/" + props.image)} alt={props.alt} />
      </div>
      <div className='text-wrapper'>
        <h1>{props.title_1}<br />{props.title_2}</h1>
        <div className='a'>{props.link_title}</div>
      </div>
    </div>
  )
}

export default DiscoverCard;