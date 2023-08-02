import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"




let store = {
  _state : {
    profilePage : {
        posts : [
            {id: 1, post:'First post...........First post.....First post', likesCount:12   }, 
            {id: 2, post:'Second post/////////..........Second post', likesCount:101   }, 
            {id: 3, post:'Third post..........Third post.........Third post', likesCount:3  },
          ],
        newPostText: 'newPostText from state.profilePAge.newPostText'
          

    },

    dialogsPage : {
        dialogs : [
            {id: 1, name:'Ivan' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtzTlO5KRSzZ67XMGm2DTq_5fmxVhcsm1cw&usqp=CAU'}, 
            {id: 2, name:'Helen',avatar:'https://i.etsystatic.com/38695703/r/il/f65f5c/4503343013/il_fullxfull.4503343013_kdw1.jpg'}, 
            {id: 3, name:'Dron' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraCCbsJgrDL_kgCO1chAroGr2KPPwWmVtEw&usqp=CAU'},
            {id: 4, name:'Marta',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnvie5SwbhhA5YJXKqRDDOlsWvlA2Sz81UQ&usqp=CAU'},
            {id: 5, name:'Dima' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VgouGIj5sFWwhEycB1euuynhs5Cvt1NsMA&usqp=CAU'},
            {id: 6, name:'Alex' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ukvUsooi5M8QMU0jGJagEF824N_DbpAxHg&usqp=CAU'},
            {id: 7, name:'Hehe' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRo6oRGkD1T75-wJCMY5ObXIoL3OkSCo0N7g&usqp=CAU'},
          ],
        messages : [
            {id: 1, message:'Hey'   }, 
            {id: 2, message:'Sup'   }, 
            {id: 3, message:'Wag1'  },
            {id: 4, message:'Wag!!!!'  },
            {id: 5, message:'LOL'  }
          ],
          newMessageText: 'newMessageText from state.DialogPage' 
    },

    sidebar: {
        friendList: [
            {id: 1, name:'Dron' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraCCbsJgrDL_kgCO1chAroGr2KPPwWmVtEw&usqp=CAU'},
            {id: 2, name:'Dima' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VgouGIj5sFWwhEycB1euuynhs5Cvt1NsMA&usqp=CAU'},
            {id: 3, name:'Alex' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ukvUsooi5M8QMU0jGJagEF824N_DbpAxHg&usqp=CAU'},
            
          ],


    }

},
_callSubscriver() {
  console.log("state is changed")
},


getState() {
  return this._state
},
subscribe(observer){
  this._callSubscriver = observer
},


addPost() {
  let newPost = {
    id:5,
    post: this._state.profilePage.newPostText,
    likesCount: 0
  }
  this._state.profilePage.posts.push(newPost)
  this._state.profilePage.newPostText = ''
  this._callSubscriver(this._state)
},

updateNewPostText(newText) {
  this._state.profilePage.newPostText = newText 
  this._callSubscriver(this._state)
},

dispatch(action){
  
  this._state.profilePage = profileReducer(this._state.profilePage, action)
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
  // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
  this._callSubscriver(this._state)
}
}










export default store

window.state = store