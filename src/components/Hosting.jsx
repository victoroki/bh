import React from 'react';
import '../assets/css/index.css';

function Hosting() {
  return (
    <section className="hosting">
      <div className='hosting-image'>
        <img src={require('../assets/images/hosting.webp')} alt="hosting" />
      </div>
      <div className='hosting-text'>
        <h1>Questions<br/>about<br/>hosting?</h1>
      </div>
      <div className='hosting-button'>
        <div className="a">Ask a Superhost</div>
      </div>
    </section>
  )
}

export default Hosting;