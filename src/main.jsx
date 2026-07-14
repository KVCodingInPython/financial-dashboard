import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AllCommunityModule, ModuleRegistry } from 'ag-charts-community'

ModuleRegistry.registerModules([AllCommunityModule])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

