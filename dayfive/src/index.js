import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './components/dayNine/authContext/AuthContextProvider.jsx'
import ThemeContextProvider from './components/dayNine/themeContext/ThemeContextProvider.jsx'

import DarkModeContext from './components/dayNine/Darkmode/DarkModeContext.jsx'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <DarkModeContext>
          <App />
        </DarkModeContext>
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
