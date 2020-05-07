import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff934c",
    },
    secondary: {
      main: "#4f4f4f",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f4f6f8",
    },
  },
});

export default theme;
