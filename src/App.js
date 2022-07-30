// components + pages
import Appbar from './components/appbar/Appbar';
import Home from './pages/home/Home';
import Upload from './pages/upload/Upload';
import Edit from './pages/presets_edit/Edit';
import Download from './pages/download/Download';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const logoFont = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "sans-serif",
    ].join(','),
    h3: {
      fontFamily: [
        'Chakra Petch',
        'sans-serif',
      ].join(','),
    },
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
    <div className='App'>
      <Router>
        <ThemeProvider theme={logoFont}>
          <Appbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </ThemeProvider>
      
      </Router>
    </div>
  );
}

export default App;
