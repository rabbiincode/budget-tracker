import { ThemeProvider } from "@mui/styles";
import { Provider } from "./context/context";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import NavigationLayout from "./components/layouts/navigationLayout";

const App = () => {
  const theme = createTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider>
          <NavigationLayout />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
