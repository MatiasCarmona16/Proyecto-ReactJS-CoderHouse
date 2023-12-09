import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";


import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyBHPVYt0BGT6xr37jEZr5Fc0MUASQcvzF0",
  authDomain: "eccomerce-coderhouse-reactjs.firebaseapp.com",
  projectId: "eccomerce-coderhouse-reactjs",
  storageBucket: "eccomerce-coderhouse-reactjs.appspot.com",
  messagingSenderId: "818545072960",
  appId: "1:818545072960:web:891ae01b7cdb15644c78a5"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
