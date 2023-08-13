import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
