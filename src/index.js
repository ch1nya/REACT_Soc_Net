import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderEntireTree = (store) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}



rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store)
})
reportWebVitals();

