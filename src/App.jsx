import {
  Button,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Grid
          container
          border={1}
          justifyContent='center'
          alignItems='center'
          style={{ height: "100vh" }}>
          <Grid textAlign='center'>
            <Typography variant='h1' component='div' gutterBottom>
              Hola Mundo
            </Typography>
            <Button
              variant='contained'
              size='large'
              onClick={() => setDarkMode(!darkMode)}>
              Change Theme
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
