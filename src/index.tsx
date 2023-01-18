import App from './App';
import { GlobalStyle } from './styles/global';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from './styles/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);