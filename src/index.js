import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/redux-store';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderEntireTree = (store) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App
                // store={store}
                // dispatch ={store.dispatch.bind(store)} 
                // replaced props with context 
                />
            </StoreContext.Provider>
        </React.StrictMode>
    );
}



rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store)
})
reportWebVitals();

