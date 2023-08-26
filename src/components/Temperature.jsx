import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Temperature({temp}) {
  const { t } = useTranslation();

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
      <Typography variant="h6">{t(temp.description)}</Typography>
      <br />
      <Typography variant="h7">{t('min')}: {temp.min} | {t('max')}: {temp.max}</Typography>
    </Box>
  );
}

export default Temperature;
