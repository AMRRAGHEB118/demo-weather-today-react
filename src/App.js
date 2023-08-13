import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/material';
import Wheather from './components/Weather.jsx';
import LangButton from './components/LangButton';

const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl" className="App">
        <Container maxWidth="sm">
          <Wheather />
          <br />
          <LangButton />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
