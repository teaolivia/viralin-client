import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
        light: '#ff9e40',
        main: '#ff6d00',
        dark: '#c43c00',
        contrastText: '#000000'
    },    
    secondary: {
        light: '#c3402a',
        main: '#8c0000',
        dark: '#590000',
        contrastText: '#ffffff'
    },
  },
});

function Theme() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}

export default Theme;