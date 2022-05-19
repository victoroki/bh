import React from 'react';
import '../assets/css/footer.css';
import Grid from '@mui/material/Grid';

function FooterCol(props) {
  return (
    <Grid item xs={12} sm={4} lg={12}>
      <div className='a'>
        {props.name}
      </div>
    </Grid>
  )
}

export default FooterCol;