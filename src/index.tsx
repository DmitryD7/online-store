import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './application/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./application/store";
import {HashRouter} from "react-router-dom";
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUCvqU9XYMQrwNQV1gCIb_8HMRoJIDznA",
    authDomain: "online-store-1600b.firebaseapp.com",
    databaseURL: "https://online-store-1600b-default-rtdb.firebaseio.com",
    projectId: "online-store-1600b",
    storageBucket: "online-store-1600b.appspot.com",
    messagingSenderId: "909728422193",
    appId: "1:909728422193:web:aebede379754c444bef810"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
