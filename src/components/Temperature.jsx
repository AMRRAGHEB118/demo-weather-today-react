import { Box, Typography } from '@mui/material';

function Temperature() {
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
        <Typography variant="h1">38</Typography>
        {/* TODO : Image TEAMP */}
      </Box>
      <Typography variant="h6">Broken clouds</Typography>
      <br />
      <Typography variant="h7">الصغري: 38 | الكبري: 38</Typography>
    </Box>
  );
}

export default Temperature;
