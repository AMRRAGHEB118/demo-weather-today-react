import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

function Temperature() {
  const { t } = useTranslation();
  const weather = useSelector((state) => {
    return state.weather.weather
  }) 
  const isLoading = useSelector((state) => {
    return state.weather.isLoading
  }) 
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
          justifyContent: isLoading ? 'center' :'space-around',
        }}
      >
        {isLoading ? <CircularProgress sx={{color:'white'}}/> : null}
        <Typography variant="h1">{weather.number}</Typography>
        <img src={weather.icon} alt={weather.description}></img>
      </Box>
      <Typography variant="h6">{t(weather.description)}</Typography>
      <br />
      <Typography variant="h7">{t('min')}: {weather.min} | {t('max')}: {weather.max}</Typography>
    </Box>
  );
}

export default Temperature;
