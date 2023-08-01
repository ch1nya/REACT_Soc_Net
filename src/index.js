import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'))


 let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App 
                state={store.getState()}
                dispatch ={store.dispatch.bind(store)}
            />
        </React.StrictMode>
  );
}

store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState());


reportWebVitals();

