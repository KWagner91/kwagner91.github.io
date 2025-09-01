import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
    },
    text: {
      primary: '#3a4557',
      secondary: '#edf2f7',
    },
    primary: {
      main: '#4e42c3',
    },
    secondary: {
      main: '#dfe7ef',
    },
    info: {
      main: '#8b97ad',
    },
  },
  typography: {
    fontFamily: 'Lato, Geneva, sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 17,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700,  },
    h3: { fontWeight: 700 },
    h4: { color:'#4e42c3' }

  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          lineHeight: 1.4,
          margin: 0,
        },
      },
    },
  },
});

export default theme;
