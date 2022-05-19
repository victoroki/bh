import React from 'react';
import '../assets/css/index.css';

function InspirationCard(props) {
  return (
    <div>
      <div className='inspiration-card'>
        <div className='image-wrapper'>
          <img src={require('../assets/images/' + props.image)} alt={props.alt} />
        </div>
        <div className='text-wrapper' style={{backgroundColor: props.bg}}>
          <h2>{props.title}</h2>
          <h6>{props.desc}</h6>
        </div>
      </div>
    </div>
  )
}

export default InspirationCard;