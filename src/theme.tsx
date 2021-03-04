import { createMuiTheme } from "@material-ui/core/styles";
import lanbrosBackgroundImage from "./assets/pexels-keyboard.jpg";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: "white",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          background:
            `url(${lanbrosBackgroundImage})` + " no-repeat center center fixed",
          backgroundSize: "cover",
        },
      },
    },
    MuiCard: {
      root: {
        borderRadius: "0px",
      },
    },
  },
  palette: {
    primary: { main: "#1D353F" },
    secondary: { main: "#264653" },
    warning: { main: "#E9C46A" },
    error: { main: "#F4A261" },
    success: { main: "#F4A261" },
  },
});

export default theme;
