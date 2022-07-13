import Appbar from './components/appbar/Appbar';
import Home from './pages/home/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const logoFont = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "sans-serif",
    ].join(','),
    h4: {
      fontFamily: [
        'Chakra Petch',
        'sans-serif',
      ].join(','),
    },
    h5: {
      fontFamily: [
        'Chakra Petch',
        'sans-serif',
      ].join(','),
    },
  },});

function App() {
  return (
    <Router>
      <ThemeProvider theme={logoFont}>
        <Appbar/>
        <Routes>
          <Route exact path="/">

          </Route>
          <Route path="/upload">

          </Route>
          <Route path="/edit">

          </Route>
          <Route path="/download">

          </Route>
        </Routes>
        < Home/>
      </ThemeProvider>
      
    </Router>
  );
}

export default App;
