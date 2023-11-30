import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import FontStyles from './assets/fonts/fontStyles';

import { EventsArray } from './mocks/historicalEvents';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <FontStyles />
    <App eventsList={EventsArray}/>
  </React.StrictMode>
);

