import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/redux-store';
// import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'))   
 let rerenderEntireTree = (store) => {
    root.render(
        <React.StrictMode>
            <App 
                store={store}
                dispatch ={store.dispatch.bind(store)}
            />
        </React.StrictMode>
  );
}



rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store)
})
reportWebVitals();

