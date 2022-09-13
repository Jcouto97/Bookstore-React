import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment); //é o que aparece no ts
root.render(
  //<React.StrictMode> PARA USE EFFECT N IMPRIMIR 2X
  <App />
  //</React.StrictMode>
);

