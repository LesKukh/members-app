import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC9aEBpgHJQ1nBnurAsLTulgXUnhOD7bzQ",
    authDomain: "members-only-24da8.firebaseapp.com",
    projectId: "members-only-24da8",
    storageBucket: "members-only-24da8.appspot.com",
    messagingSenderId: "539310508978",
    appId: "1:539310508978:web:e6e785862bed0b461772ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
