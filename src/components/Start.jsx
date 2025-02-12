import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Start = ({ onStart }) => {


  const card = (
    <React.Fragment>
      <CardContent className='bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md'>
        <Typography sx={{fontSize: 19, color:'white'}}>
          Welcome To Quiz     
        </Typography>
        <br />
        <CardActions>
        <Button variant="contained" onClick={onStart}>Start Quiz</Button>
        </CardActions>
      </CardContent>
    </React.Fragment>
  )

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="conitained">{card}</Card>
      </Box>
    </>
  );
};

export default Start;
