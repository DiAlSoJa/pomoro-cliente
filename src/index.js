import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SettingsContextProvider from './context/SettingsContext';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingsContextProvider>
    <UserProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </UserProvider>
  </SettingsContextProvider>
);
