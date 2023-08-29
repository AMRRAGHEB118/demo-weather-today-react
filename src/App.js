import './App.css';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/material';
import Wheather from './components/Weather.jsx';
import LangButton from './components/LangButton';
import moment from 'moment';
import 'moment/min/locales.min';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './weatherApiSlice';

const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
});

function App() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState('en');
  const [dateAndtime, setDateAndtime] = useState('');
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(fetchWeather());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
    moment.locale(lang);
    setDateAndtime(moment().format('Do MMMM YYYY'));
  }, [i18n, lang]);

  return (
    <ThemeProvider theme={theme}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="App">
        <Container maxWidth="sm">
          <Wheather dateAndtime={dateAndtime} />
          <br />
          <LangButton lang={lang} setLang={setLang} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
