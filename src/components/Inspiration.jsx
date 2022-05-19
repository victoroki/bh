import React from 'react';
import '../assets/css/index.css';
import SectionHeading from './SectionHeading';
import InspirationCard from './InspirationCard';
import Grid from '@mui/material/Grid';

function Inspiration() {
  return (

    <section className="inspiration">
        <div className='section-wrapper'>
        
          <SectionHeading 
            title="Inspiration for your next trip"
          />

          <Grid container spacing={3}>
            
            <Grid item xs={12} sm={6} lg={3}>
              <InspirationCard 
                image="inspiration-1.webp" 
                alt="Mussoorie" 
                bg='#DE3151' 
                title="Mussoorie" 
                desc="223 kilometers away"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <InspirationCard 
                image="inspiration-2.webp" 
                alt="Manali" 
                bg='#CC2D4A' 
                title="Manali" 
                desc="405 kilometers away"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <InspirationCard 
                image="inspiration-3.webp" 
                alt="Kasauli" 
                bg='#D93B30' 
                title="Kasauli" 
                desc="257 kilometers away"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <InspirationCard 
                image="inspiration-4.webp" 
                alt="Haldwani" 
                bg='#BC1A6E' 
                title="Haldwani" 
                desc="235 kilometers away"
              />
            </Grid>
            
          </Grid>

        </div>
    </section>
  );
}

export default Inspiration;