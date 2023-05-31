import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { RecoilRoot } from 'recoil'
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/api"
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('tokenUser')}`
  return config
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

