import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../src/index.css';
import { MenuProvider } from './context/MenuContext.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <App/>
    </MenuProvider>
  </React.StrictMode>
)
