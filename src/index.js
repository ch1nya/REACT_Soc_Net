import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, post:'First post...........First post.....First post', likesCount:12   }, 
  {id: 2, post:'Second post/////////..........Second post', likesCount:101   }, 
  {id: 3, post:'Third post..........Third post.........Third post', likesCount:3  },
]  

let dialogs = [
  {id: 1, name:'Ivan'  }, 
  {id: 2, name:'Helen' }, 
  {id: 3, name:'Dron'  },
  {id: 4, name:'Marta' },
  {id: 5, name:'Dima'  },
  {id: 2, name:'Alex'  },
  {id: 2, name:'Hehe'  },
]

let messages = [
  {id: 1, message:'Hey'   }, 
  {id: 2, message:'Sup'   }, 
  {id: 3, message:'Wag1'  },
  {id: 3, message:'Wag!!!!'  },
  {id: 3, message:'LOL'  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    posts={posts}
    dialogs={dialogs}
    messages={messages}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

