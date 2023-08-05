import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/redux-store';
// import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'))   
debugger
 let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App 
                store={store.getState()}
                dispatch ={store.dispatch.bind(store)}
            />
        </React.StrictMode>
  );
}



rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
reportWebVitals();

