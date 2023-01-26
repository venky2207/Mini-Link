import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbzb_m03CdoChJKF7CfvrIYJq97eUa1tU",
  authDomain: "url-shortener-27633.firebaseapp.com",
  projectId: "url-shortener-27633",
  storageBucket: "url-shortener-27633.appspot.com",
  messagingSenderId: "296200842540",
  appId: "1:296200842540:web:57938dc542bbd492f5d089",
  measurementId: "G-TZPQX8V9DK"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
