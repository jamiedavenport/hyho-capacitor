import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import firebase from "firebase/app";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Add @ionic/pwa-elements so that certail plugins work
defineCustomElements(window);

firebase.initializeApp({
  apiKey: "AIzaSyAJP8rLlsdwV7yIMlwefIKth3eLy-EblAw",
  authDomain: "hyho-capacitor.firebaseapp.com",
  projectId: "hyho-capacitor",
  storageBucket: "hyho-capacitor.appspot.com",
  messagingSenderId: "901631595514",
  appId: "1:901631595514:web:57b6a6148f216b94e64a43",
});
