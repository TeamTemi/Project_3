import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <ThemeContextProvider> 
      <App />
    </ThemeContextProvider>   
  </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();