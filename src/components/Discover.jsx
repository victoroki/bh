import React from 'react';
import '../assets/css/index.css';
import SectionHeading from './SectionHeading';
import Grid from '@mui/material/Grid';
import DiscoverCard from "./DiscoverCard";

function Discover(props) {
  return (
    <section className="discover">
      <div className='section-wrapper'>
        
        <SectionHeading 
          title="Discover Airbnb Experiences"
        />

        <Grid container spacing={3}>

          <Grid item md={6} sm={12}>
            <DiscoverCard
              image="discover-1.webp" 
              alt="Discover 1" 
              title_1="Things to do" 
              title_2="on your trip" 
              link_title="Experiences"
            />
          </Grid>

          <Grid item md={6} sm={12}>
          <DiscoverCard
              image="discover-2.webp" 
              alt="Discover 2" 
              title_1="Things to do" 
              title_2="from home" 
              link_title="Online Experiences"
            />
          </Grid>

        </Grid>

      </div>
    </section>
  )
}

export default Discover;