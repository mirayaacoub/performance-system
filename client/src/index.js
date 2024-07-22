import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createTheme } from '@mui/material';

import { extendTheme as extendJoyTheme } from '@mui/joy/styles';
import { CssVarsProvider as JoyThemeProvider } from '@mui/joy/styles';


// import { createTheme } from '@mui/system';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: 'rgb(19, 32, 60)',
    },
    secondary: {
      main: 'rgb(0, 169, 184)'
    },
    Tertiary: {
      main: '#8f8f8f'
    },
    quaternary: {
      main: '#4472C4'
    },
    quinary: {
      main: '#303130' // Color code here
    }
  },
});

// Extend the default Joy theme
// const joyTheme = extendJoyTheme({
//   // Define your palette or other theme options here
//   palette: {
//     primary: {
//       main: '#007bff',
//     },
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//     background: {
//       level1: '#f0f0f0',
//     },
//     text: {
//       tertiary: '#6c757d',
//     },
//     warning: {
//       300: '#ffd700',
//     },
//   },
// });

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
