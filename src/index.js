import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "typeface-spartan"
import "typeface-playfair-display"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import store2 from './app/store'

ReactDOM.render(
    <BrowserRouter >
        <Provider store={store2}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

