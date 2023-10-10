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
                image="inspiration-1.jpeg" 
                alt="Mussoorie" 
                bg='#DE3151' 
                title="Diani" 
                desc="contact Ronnie TK 0748302615"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <InspirationCard 
                image="inspiration-2.jpeg" 
                alt="Manali" 
                bg='#CC2D4A' 
                title="Roysambu" 
                desc="contact Ronnie TK 0748302615"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <InspirationCard 
                image="inspiration-3.jpeg" 
                alt="Kasauli" 
                bg='#D93B30' 
                title="Nyali" 
                desc="contact Ronnie TK 0748302615"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <InspirationCard 
                image="inspiration-4.jpeg" 
                alt="Haldwani" 
                bg='#BC1A6E' 
                title="Lang'ata" 
                desc="contact Ronnie TK 0748302615"
              />
            </Grid>
            
          </Grid>

        </div>
    </section>
  );
}

export default Inspiration;