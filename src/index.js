import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state';
import { subscrible } from './Redux/state';


import App from './App';
import { updateNewPostText } from './Redux/state';
import { addPost } from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'))

 let rerenderEntireTree = (state) => {
  ;
  root.render(
    <React.StrictMode>
      <App 
      state={state}
      addPost={addPost}
      updateNewPostText = {updateNewPostText}
      />
    </React.StrictMode>
  );
}

rerenderEntireTree(state);
subscrible(rerenderEntireTree)

reportWebVitals();

