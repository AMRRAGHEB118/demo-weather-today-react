import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function City() {
  const { t } = useTranslation();

  return <Typography variant="h2">{t('city')}</Typography>;
}

export default City;
