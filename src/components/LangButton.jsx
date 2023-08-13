import { Button } from '@mui/material';

function LangButton() {
  return (
    <Button
      sx={{
        color: 'white',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        right: 230,
      }}
    >
      أنجليزي
    </Button>
  );
}

export default LangButton;
