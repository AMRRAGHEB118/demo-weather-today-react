import './App.css';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/material';
import Wheather from './components/Weather.jsx';
import LangButton from './components/LangButton';
import axios from 'axios';
import config from './config';
import moment from 'moment';
import 'moment/min/locales.min';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
});

let cencel = null;

function App() {
  const [lang, setLang] = useState('en');
  const [temp, setTemp] = useState({
    number: null,
    description: '',
    max: null,
    min: null,
    icon: null,
  });
  const [dateAndtime, setDateAndtime] = useState('');
  const { baseURL } = axios.defaults;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  useEffect(() => {
    moment.locale(lang);
    setDateAndtime(moment().format('Do MMMM YYYY'));
  }, [lang]);

  useEffect(() => {
    axios
      .get(`${baseURL}?lat=30.033333&lon=31.233334&appid=${config.apiKey}`, {
        cancelToken: new axios.CancelToken((c) => {
          cencel = c;
        }),
      })
      .then((res) => {
        const currentTemp = Math.round(res.data.main.temp - 272.15);
        const maxTemp = Math.round(res.data.main.temp_max - 272.15);
        const minTemp = Math.round(res.data.main.temp_min - 272.15);
        const description = res.data.weather[0].description;
        const iconTemp = res.data.weather[0].icon;
        setTemp({
          number: currentTemp,
          description: description,
          max: maxTemp,
          min: minTemp,
          icon: `https://openweathermap.org/img/wn/${iconTemp}@2x.png`,
        });
      })
      .catch((e) => {
        console.log(e);
      });
    return () => {
      cencel();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl" className="App">
        <Container maxWidth="sm">
          <Wheather dateAndtime={dateAndtime} temp={temp} />
          <br />
          <LangButton lang={lang} setLang={setLang} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
