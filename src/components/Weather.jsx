import { Card, CardContent, Box } from '@mui/material';
import City from './City';
import Date from './Date';
import Temperature from './Temperature';
import CloudImage from './CloudImage';

function Weather({dateAndtime, temp}) {
  return (
    <Card
      sx={{
        minWidth: 275,
        background: '#687e8f6e',
        color: 'white',
        position: 'relative',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <City />
        <Date dateAndtime={dateAndtime}/>
      </CardContent>
      <hr />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Temperature temp={temp}/>
        <Box
          sx={{
            width: 250,
            height: 300,
          }}
        >
          <CloudImage />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Weather;
