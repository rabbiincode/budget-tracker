import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/styles';
import { Provider } from "./context/context";
import { createTheme } from '@mui/material/styles';
import NavigationLayout from './components/layouts/navigationLayout';

const theme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavigationLayout>
        <Provider>
          <App />
        </Provider>
      </NavigationLayout>
    </ThemeProvider>
  </React.StrictMode>,
);
