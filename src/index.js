import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);
