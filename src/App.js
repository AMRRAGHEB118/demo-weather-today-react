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
  const [temp, setTemp] = useState(null);
  const {baseURL} = axios.defaults
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
        setTemp(currentTemp);
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
