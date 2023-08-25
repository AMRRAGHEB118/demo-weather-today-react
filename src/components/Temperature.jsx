import { Box, Typography } from '@mui/material';

function Temperature({temp}) {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: '60%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Typography variant="h1">{temp.number}</Typography>
        <img src={temp.icon} alt={temp.description}></img>
      </Box>
      <Typography variant="h6">{temp.description}</Typography>
      <br />
      <Typography variant="h7">الصغري: {temp.min} | الكبري: {temp.max}</Typography>
    </Box>
  );
}

export default Temperature;
