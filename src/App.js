import './App.css';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/material';
import Wheather from './components/Weather.jsx';
import LangButton from './components/LangButton';
import axios from 'axios';
import config from './config';

const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
});

let cencel = null;

function App() {
  const [temp, setTemp] = useState({
    number: null,
    description: '',
    max: null,
    min: null,
    icon: null,
  });
  const { baseURL } = axios.defaults;
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `${baseURL}?lat=30.033333&lon=31.233334&appid=${config.apiKey}`,
          {
            cancelToken: new axios.CancelToken((c) => {
              cencel = c;
            }),
          }
        );
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
      } catch (e) {
        console.log(e);
      }
      return () => {
        cencel();
      };
    };
    fetchWeather();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl" className="App">
        <Container maxWidth="sm">
          <Wheather temp={temp} />
          <br />
          <LangButton />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
