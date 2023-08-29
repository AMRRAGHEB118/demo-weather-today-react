import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';

// let cencel = null;

export const fetchWeather = createAsyncThunk(
  'weaterApi/fetchWeather',
  async () => {
    const { baseURL } = axios.defaults;
    try {
      const res = await axios.get(
        `${baseURL}?lat=30.033333&lon=31.233334&appid=${config.apiKey}`
      );
      const currentTemp = Math.round(res.data.main.temp - 272.15);
      const maxTemp = Math.round(res.data.main.temp_max - 272.15);
      const minTemp = Math.round(res.data.main.temp_min - 272.15);
      const description = res.data.weather[0].description;
      const iconTemp = res.data.weather[0].icon;

      return {
        number: currentTemp,
        description: description,
        max: maxTemp,
        min: minTemp,
        icon: `https://openweathermap.org/img/wn/${iconTemp}@2x.png`,
      };
    } catch (e) {
      console.error(e);
    }

    // return () => {
    //   cencel();
    // };
  }
);

export const weatherApiSlice = createSlice({
  name: 'weatherApi',
  initialState: {
    weather: {},
    isLoading: false,
  },
  reducers: {
    change: (state, action) => {
      console.log('log all state: ', state.temp);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { change } = weatherApiSlice.actions;

export default weatherApiSlice.reducer;
