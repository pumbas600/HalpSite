import { Grid, Typography } from '@mui/material';
import React from 'react';
import Day from './Day';

function Month({ date = new Date() }) {

    function monthDays() {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    function generateDays() {
      let days = [];
      for (let i = 1; i <= monthDays(); i++) {
        let day = new Date(date.getFullYear(), date.getMonth(), i);
        days.push(
          <Grid item xs={12/7}>
            <Day date={day} />
          </Grid>
        );
      }
      return days;
    }
  
    return (
        <div className="month-class">
            <Typography gutterBottom variant='h2' className="month-title centre-text">
                {date.toLocaleDateString('default', { month: 'long', year: 'numeric'})}
            </Typography>    
            <Grid container spacing={1} >
                {generateDays()}
            </Grid>
        </div>
    )
}

export default Month

