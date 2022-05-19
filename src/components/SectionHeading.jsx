import React from 'react';
import '../assets/css/index.css';

function SectionHeading(props) {
  return (
    <div className='section-heading'>
      <h1>{props.title}</h1>
    </div>
  );
}

export default SectionHeading;