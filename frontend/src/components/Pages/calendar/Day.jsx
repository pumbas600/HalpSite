import React from "react";
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

function Day({ date }) {
    return (
        <Card>
            <CardActionArea href="/todo">
                <CardContent style={{backgroundColor: "#b7cce2"}} >
                    <Typography variant='h6' sx={{minHeight: 100}} style={{color: '#fff'}}>
                        {date.toLocaleDateString('default', { weekday: 'short', day: 'numeric'})}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
// /todo/yyyy/mm/dd
export default Day;
