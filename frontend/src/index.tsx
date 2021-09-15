import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/';
import reportWebVitals from './reportWebVitals';
import { ID_ROOT } from "./common/constants";
import { Provider } from "react-redux";
import store from "./config/store";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
  document.getElementById(ID_ROOT)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
