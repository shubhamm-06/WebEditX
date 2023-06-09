import Home from "./Components/Home.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({

  typography: {
    fontFamily: [
      "Amiko",
      "BlinkMacSystemFont",
      "sans-serif",
    ].join(","),
  },
});
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
    </>
  );
}

export default App;
