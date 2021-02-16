import { createMuiTheme }  from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1D353F' },
    secondary: { main: '#264653' },
    warning: { main: '#E9C46A' },
    error: { main: '#F4A261' },
    success: { main: '#F4A261' }
  },
});

export default theme;