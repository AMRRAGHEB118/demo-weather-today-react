import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function City() {
  const { t, i18n } = useTranslation();

  useEffect(()=>{
    i18n.changeLanguage('ar')
  },[])
  return <Typography variant="h2">{t('city')}</Typography>;
}

export default City;
