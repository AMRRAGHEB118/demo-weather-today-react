import { Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

function CloudImage({iconTemp}) {
  return (
    <Typography sx={{ margin: '40px auto' }}>
      <CloudIcon sx={{ fontSize: 200 }} />
    </Typography>
  );
}

export default CloudImage;
