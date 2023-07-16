const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let store = {
    _state : {
        profilePage : {
            posts : [
                {id: 1, post:'First post...........First post.....First post', likesCount:12   }, 
                {id: 2, post:'Second post/////////..........Second post', likesCount:101   }, 
                {id: 3, post:'Third post..........Third post.........Third post', likesCount:3  },
              ],
            newPostText : "hehe zatralil lalku azazaz",
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
        },

        sidebar: {
            friendList: [
                {id: 1, name:'Dron' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraCCbsJgrDL_kgCO1chAroGr2KPPwWmVtEw&usqp=CAU'},
                {id: 2, name:'Dima' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VgouGIj5sFWwhEycB1euuynhs5Cvt1NsMA&usqp=CAU'},
                {id: 3, name:'Alex' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ukvUsooi5M8QMU0jGJagEF824N_DbpAxHg&usqp=CAU'},
                
              ],


        }

    },
    callSubscriber() {
      console.log('State is changed')
    },

    getState() {
      return this._state
    },
    subscrible(observer){
      this._callSubscriber = observer
    },
    
    dispatch(action){ // {type:'ADD-POST'}
      if (action.type === 'ADD-POST'){
        let newPost = {
          id:5,
          post: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)

      }else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state)
      }
    },

    
    // addPost() {
     
    // }, // since we created dispatch we can remove it. It will be removed at the next commit
    // updateNewPostText(newText){
      
    // }, // since we created dispatch we can remove it. It will be removed at the next commit
   
  

  }

export const addPostActionCreator = () => {
  return  {    
      type:ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return  {
      type: UPDATE_NEW_POST_TEXT, 
      newText: text
  }
}


export default store;
window.store = store;