import React from 'react';
import '../assets/css/index.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-1">
        <div className='hero-1-wrapper'>
          <h1>Help house 100,000 refugees fleeing Ukraine</h1>
          <div className='a'>Learn more</div>
        </div>
      </div>
      <div className='hero-2'>
        <div className='hero-2-wrapper'>
          <div className='image-wrapper'>
            <img src={require("../assets/images/hero-2.webp")} alt="hero img" />
          </div>
          <div className='text-wrapper'>
            <h1>Let your curiosity do the booking</h1>
            <div className='a'>I'm flexible</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;